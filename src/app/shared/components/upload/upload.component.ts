import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogService } from '@coditashq/ng-ada-components';
import { FileSizeErrorPopupComponent } from './file-size-error-popup/file-size-error-popup.component';
import { IFileUpload, IUploadFileAcceptance } from './interfaces/upload-file';
import { UploadTemplateComponent } from './upload-template/upload-template.component';
import { EFileData, getUploadTypeData } from './upload.component.data';

@Component({
	selector: 'app-upload',
	standalone: true,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => UploadComponent),
			multi: true,
		},
	],
	imports: [UploadTemplateComponent],
	templateUrl: './upload.component.html',
	styleUrl: './upload.component.scss',
})
export class UploadComponent implements OnInit, ControlValueAccessor {
	MAX_SIZE = 10 * 1024 * 1024;
	@Input() id: string = Math.random().toLocaleString();
	@Input() type: 'pdf' | 'audio' | 'image' | 'text' = EFileData.pdf;
	@Output() upload = new EventEmitter();
	@Input() uploadedFiles: IFileUpload[] = [];
	uploadFileData: IUploadFileAcceptance = getUploadTypeData(this.type);
	constructor(private dialogService: DialogService) {}
	ngOnInit(): void {
		this.uploadFileData = getUploadTypeData(this.type);
	}
	onFileSelection(event: Event) {
		const input = event.target as HTMLInputElement;
		const files = input.files;
		if (files && files.length > 0) {
			if (files[0].size > this.MAX_SIZE) {
				this.dialogService.open(
					{
						title: 'File exceeding the limit',
						subtitle: '',
						type: 'default',
						showCloseIcon: true,
						options: {
							cancel: 'Retry',
							submit: '',
						},
					},
					FileSizeErrorPopupComponent
				);
			} else {
				const fileData: IFileUpload = {
					name: files[0].name,
					size: files[0].size,
					file: files[0],
				};
				this.uploadedFiles.push(fileData);
			}
		}
		this.upload.emit(this.uploadedFiles);
		this.writeValue(this.uploadedFiles);
	}

	onDeleteFile(index: number) {
		this.uploadedFiles.splice(index, 1);
		this.upload.emit(this.uploadedFiles);
		this.writeValue(this.uploadedFiles);
	}

	onChange = (value: IFileUpload[] | undefined) => {};
	onTouch = () => {};
	writeValue(value: IFileUpload[]): void {
		this.onChange(value);
	}
	registerOnChange(fn: (value: IFileUpload[] | undefined) => void): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}
}
