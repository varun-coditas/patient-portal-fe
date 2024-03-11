import { Injectable } from '@angular/core';
import { HttpService } from '../../../common-services/http/http.service';
import {
	PipelineConfig,
	PipelineDetailsResponse,
	PipelineDetailsWithFilteredConfigs,
	SaveFileResponse,
	dropDownOptionsExtended,
} from '../interface/pipeline-config';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFileUpload } from '../../../shared/components/upload/interfaces/upload-file';
import { DialogService } from '@coditashq/ng-ada-components';
import { SourceContentType } from '../constants/pipeline-config';
import { IDynamicForm } from '../../../shared/components/dynamic-form/dynamic-form.component.data';

@Injectable({
	providedIn: 'root',
})
export class PipelineConfigService {
	pipelineDetailsWithConfig!: PipelineDetailsWithFilteredConfigs;

	core = '/core';
	genAi = '/gen_ai';
	pipeline = '/pipeline';

	constructor(
		private http: HttpService,
		private dialogService: DialogService
	) {}

	saveIOAndLlmForms(id: string, data: any) {
		return this.http.post(`${this.pipeline}/${id}/configuration/`, data);
	}

	getPipelineDetailsById(id: string) {
		return this.http.get<PipelineDetailsResponse>(`/pipeline/${id}/`);
	}

	saveInputFile(
		files: IFileUpload[],
		pipelineId: string
	): Observable<SaveFileResponse> {
		const inputData: FormData = new FormData();
		files.forEach((files: IFileUpload) => {
			inputData.append('file', files.file);
		});
		inputData.append('pipeline_id', pipelineId);
		return this.http.post<SaveFileResponse>(
			`${this.pipeline}/${pipelineId}/files/`,
			inputData
		);
	}

	publishPipeline(id: string) {
		return this.http.post(`${this.pipeline}/${id}/publish/`, null);
	}


	setPipelineDetails(details: PipelineDetailsResponse) {
		this.pipelineDetailsWithConfig = {
			actualSelection: {
				inputSources: [],
				llmSources: [],
				outputSources: [],
			},
			modifiedSelection: {
				inputSources: [],
				llmSources: [],
				outputSources: [],
			},
			detailsResponse: details,
		};
		details.configurations.forEach((config: PipelineConfig) => {
			switch (config.content_type) {
				case SourceContentType.inputSource:
					this.pipelineDetailsWithConfig.actualSelection.inputSources.push(
						config.content_object.name
					);
					break;
				case SourceContentType.outputSource:
					this.pipelineDetailsWithConfig.actualSelection.outputSources.push(
						config.content_object.name
					);
					break;
					case SourceContentType.embeddingModel:
					case SourceContentType.inferenceModel:
					this.pipelineDetailsWithConfig.actualSelection.llmSources.push(
						config.content_object.name
					);
					break;

				default:
					null;
					break;
			}
		});
	}
	getChangedSourcesFromSelection(
		formFields: {
			formConfig: IDynamicForm[][] | null;
			dropDownoption: dropDownOptionsExtended | null;
			editValues: {};
		}[]
	): string[] {
		const modifiedValues: string[] = [];
		formFields.forEach(field => {
			if (field.dropDownoption && field.dropDownoption.option) {
				modifiedValues.push(field.dropDownoption.option);
			}
		});
		return modifiedValues;
	}
	
}
