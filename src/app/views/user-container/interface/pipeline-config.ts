import { IDynamicForm } from '../../../shared/components/dynamic-form/dynamic-form.component.data';
import { IContent } from './pipeline-history';

export interface IInputOutputSourceResponseConfig {
	chatbot_id?: string;
	filename?: string;
}
export interface IInputOutputSourceResponse {
	id: string;
	type: string;
	name: string;
	content_type: number;
	config_template: {
		form_fields: IDynamicForm[][];
	};
}

export interface IOutputSourceResponse {
	id: string;
	type: string;
	name: string;
	content_type: number;
	config_template: {
		form_template: IDynamicForm[][];
		markdown_content: string;
	};
}

export interface ILlmSourceResponseConfig {
	apikey: string;
}
export interface ILlmSourceResponse {
	id: string;
	name: string;
	content_type: number;
	config_template: {
		form_fields: IDynamicForm[][];
	};
}
export interface IEmbeddingModels {
	id: string;
	name: string;
	content_type: number;
	config_template: {
		form_fields: IDynamicForm[][];
	};
}

export interface IAiFormData {
	api_key: string;
	prompt_message: string;
}
export interface IAiFormValueEmitter {
	value: IAiFormData;
	isValid: boolean | false;
}
export interface IIOSource {
	type: string;
	name: string;
}
export interface IIOConfig {
	filename?: string;
	chatbot_id?: string;
	filesize?: string;
}
export interface IIOSourcePipelineConfig {
	inputOutputSource: IIOSource;
	configValues: IIOConfig;
}

export interface ILlmSource {
	llmSource: string;
}
export interface ILlmConfig {
	api_key: string;
	prompt_message: string;
}
export interface IEmbeddingAndInferenceModel {
	name: string;
	code: string;
	description: string;
}
export interface ILlmPipelineConfig {
	llmSource: ILlmSource;
	configValues: ILlmConfig;
	embeddingModel: IEmbeddingAndInferenceModel;
	inferenceModel: IEmbeddingAndInferenceModel;
}
export interface PipelineDetailsResponse {
	id: string;
	name: string;
	status: string;
	user: string;
	configurations: PipelineConfig[];
	originalSelections?: [][];
	modifiedSelections?: [][];
}
export interface PipelineConfig {
	config: any;
	content_object: IContent;
	content_type: string;
	id: string;
	object_id: string;
}
export interface AllSelectedSources {
	inputSources: string[];
	llmSources: string[];
	outputSources: string[];
}
export interface ConfirmationPopupData {
	pipelineName: string;
	previousSelection: AllSelectedSources;
	modifiedSelection: AllSelectedSources;
}
export interface ConfirmationPopupSourceStateData {
	isValueChanged: boolean;
	originalValue: string;
	modifiedValue: string;
}
export type ConfirmationPopupSourceState = {
	[key in keyof AllSelectedSources]: ConfirmationPopupSourceStateData;
};
export interface SaveFileResponse {
	file_info: SaveFileInfoResponse[];
}
export interface dropDownOptionsExtended {
	id: string;
	option: string;
	isDisabled: boolean;
	isSelected: boolean;
	content_type: number;
	config_template: IDynamicForm[][];
	markdown_template?: string | null;
}
export interface SaveFileInfoResponse {
	name: string;
	path: string;
	size: number;
}
export interface SaveConfigSources {
	content_type: number;
	config: any;
	object_id: string;
	id?: string;
}
export interface FilteredConfigs {
	[key: string]: PipelineConfig[];
}
export interface PipelineDetailsWithFilteredConfigs {
	detailsResponse: PipelineDetailsResponse;
	actualSelection: AllSelectedSources;
	modifiedSelection: AllSelectedSources;
}
