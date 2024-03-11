import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import {
	CUSTOM_ELEMENTS_SCHEMA,
	Component,
	OnDestroy,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

import {
	ButtonComponent,
	CardActionComponent,
	CardContentComponent,
	CardTitleComponent,
	CardsComponent,
	DropdownComponent,
	InputComponent,
} from '@coditashq/ng-ada-components';

import { BehaviorSubject } from 'rxjs';
import { AccordionComponent } from '../../../../shared/components/accordion/accordion.component';
import {
	PipelineConstants,
	SourceContentType,
} from '../../constants/pipeline-config';
import {
	FilteredConfigs,
	PipelineConfig,
	PipelineDetailsResponse,
} from '../../interface/pipeline-config';
import { PipelineConfigService } from '../../services/pipeline-config.service';
import { StepperService } from '../../services/stepper.service';
import { IStepperState } from '../../services/stepper.service.data';
import { StepperComponent } from '../component/stepper/stepper.component';
import { AuthService } from '../../../../common-services/auth/auth.service';

@Component({
	selector: 'app-create-pipeline',
	templateUrl: './create-pipeline.component.html',
	styleUrl: './create-pipeline.component.scss',
	standalone: true,
	imports: [
		CommonModule,
		CdkStepperModule,
		CardsComponent,
		CardTitleComponent,
		CardContentComponent,
		CardActionComponent,
		StepperComponent,
		AccordionComponent,
		ButtonComponent,
		FormsModule,
		ReactiveFormsModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CreatePipelineComponent implements OnInit, OnDestroy {
	@ViewChild('customStepper') stepper!: CdkStepper;
	@ViewChildren('customAccordion')
	customAccordions!: QueryList<AccordionComponent>;
	user:any = null;
	tempInput = [1, 2];
	pipelineId!: string;
	pipelineName!: string;
	isEdit: boolean = false;
	filteredConfigs$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	stepperState!: IStepperState;
	constructor(
		private stepperService: StepperService,
		private authService: AuthService
	) {

	}
	ngOnInit() {
		// this.getPipelineDetails();
		this.authService.getUserApi().subscribe((user) => {
			this.user = user;
		});
		this.stepperService.getTheStepperState().subscribe(state => {
			this.stepperState = state;
		});
	}

	ngOnDestroy(): void {
		this.stepperService.clearStepperState();
	}
}
