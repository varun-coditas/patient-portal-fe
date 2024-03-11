import {
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnDestroy,
	OnInit,
	Output,
	SimpleChanges,
	forwardRef,
} from '@angular/core';
import {
	ControlValueAccessor,
	FormBuilder,
	FormGroup,
	NG_VALUE_ACCESSOR,
	ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
	DropdownComponent,
	InputComponent,
	TextareaComponent,
} from '@coditashq/ng-ada-components';
import { Subscription, debounceTime } from 'rxjs';
import { SaveFileResponse } from '../../../views/user-container/interface/pipeline-config';
import { PipelineConfigService } from '../../../views/user-container/services/pipeline-config.service';
import { IFileUpload } from '../upload/interfaces/upload-file';
import { UploadComponent } from '../upload/upload.component';
import { IDynamicForm, customValidator } from './dynamic-form.component.data';

@Component({
	selector: 'app-dynamic-form',
	standalone: true,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DynamicFormComponent),
			multi: true,
		},
	],
	imports: [
		InputComponent,
		ReactiveFormsModule,
		UploadComponent,
		DropdownComponent,
		TextareaComponent,
	],
	templateUrl: './dynamic-form.component.html',
	styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent
	implements OnInit, ControlValueAccessor, OnChanges, OnDestroy
{
	@Input() formsfields!: IDynamicForm[][];
	@Output() formSubmit = new EventEmitter();
	@Input() formValuesForEdit: any;
	dynamicForm!: FormGroup;
	uploadedFiles: IFileUpload[] = [];

	@Output() isFormValid: EventEmitter<boolean> = new EventEmitter<boolean>();
	formValueChangesSubscription!: Subscription;
	value() {}
	constructor(
		private formBuilder: FormBuilder,
		private cdr: ChangeDetectorRef,
		private pipelineConfigService: PipelineConfigService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['formsfields'] && changes['formsfields'].currentValue) {
			this.resetForm();
			this.cdr.detectChanges();
		}
	}
	ngOnDestroy(): void {
		this.formValueChangesSubscription.unsubscribe();
	}
	ngOnInit(): void {
		this.createForm();
	}

	checkValidation() {
		if (this.dynamicForm) {
			this.formValueChangesSubscription = this.dynamicForm.valueChanges
				.pipe(debounceTime(200))
				.subscribe(() => {
					this.writeValue(this.dynamicForm.value);
					this.isFormValid.emit(this.dynamicForm.valid);
				});
		}
	}
	onChange = (value: any | undefined) => {};
	onTouch = () => {};
	writeValue(value: any): void {
		this.onChange(value);
	}
	registerOnChange(fn: (value: any | undefined) => void): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}
	resetForm() {
		if (this.dynamicForm) {
			this.formValueChangesSubscription.unsubscribe();
			this.dynamicForm.reset();
			this.dynamicForm = this.formBuilder.group({});
			this.createForm();
		}
	}
	createForm() {
		const formGroupConfig: any = {};
		this.formsfields.forEach(row => {
			row.forEach(field => {
				if (field.innerFields?.length) {
					field.innerFields.forEach(innerfield => {
						formGroupConfig[innerfield.name] = [
							'',
							[
								customValidator(
									innerfield.validationRegex
										? innerfield.validationRegex
										: /^.*$/
								),
							],
						];
					});
				} else {
					formGroupConfig[field.name] = [
						'',
						[
							customValidator(
								field.validationRegex
									? field.validationRegex
									: /^.*$/
							),
						],
					];
				}
			});
		});
		this.dynamicForm = this.formBuilder.group(formGroupConfig);
		if (this.formValuesForEdit) {
			this.dynamicForm.patchValue(this.formValuesForEdit);
			this.uploadedFiles = this.formValuesForEdit?.files || [];
			this.dynamicForm.updateValueAndValidity();
		}
		this.checkValidation();
	}

	onSubmit() {
		this.formSubmit.emit(this.dynamicForm.value);
	}

	upload(event: IFileUpload[], controlName: string) {
		const pipelineId =
			this.activatedRoute.snapshot.paramMap.get('id') || '';
		if (event.length > 0) {
			this.pipelineConfigService
				.saveInputFile(event, pipelineId)
				.subscribe((response: SaveFileResponse) => {
					if (response) {
						this.dynamicForm.controls[controlName].patchValue(
							response.file_info
						);
						this.writeValue(this.dynamicForm.value);
					}
				});
		}
	}
}
