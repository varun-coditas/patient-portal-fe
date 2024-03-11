import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent, DialogService } from '@coditashq/ng-ada-components';
import { PipelineConfigService } from '../../../services/pipeline-config.service';
import { PipelineService } from '../../../services/pipeline.service';
import { PipelineDetailsResponse } from '../../../interface/pipeline-config';
import { SourceContentType } from '../../../constants/pipeline-config';

@Component({
	selector: 'app-save-pipeline-popup',
	standalone: true,
	imports: [ButtonComponent],
	templateUrl: './save-pipeline-popup.component.html',
	styleUrl: './save-pipeline-popup.component.scss',
})
export class SavePipelinePopupComponent implements OnInit {
	pipelineId!: string;
	aiModel!: string;
	inputs: string[] = [];
	output: string[] = [];
	constructor(
		private router: Router,
		private dialogService: DialogService,
		private pipelineService: PipelineService,
		private pipelineConfigService: PipelineConfigService
	) {}
	ngOnInit(): void {
		this.getPipelineIdFromUrl();
		this.getPipelineDetails();
	}
	getPipelineIdFromUrl() {
		this.pipelineId = this.pipelineService.getPipelineId();
	}
	getPipelineDetails() {
		this.pipelineConfigService
			.getPipelineDetailsById(this.pipelineId)
			.subscribe((response: PipelineDetailsResponse) => {
				if (response) {
					response.configurations.forEach(data => {
						if (
							data.content_type === SourceContentType.inputSource
						) {
							this.inputs.push(data.content_object.name);
						} else if (
							data.content_type === SourceContentType.outputSource
						) {
							this.output.push(data.content_object.name);
						} else if (
							data.content_type === SourceContentType.inferenceModel
						) {
							this.aiModel = data.content_object.name;
						}
					});
				}
			});
	}

	goToDashboard() {
		this.router.navigateByUrl('/dashboard');
		this.dialogService.close();
	}
}
