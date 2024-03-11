export interface IPipelineTableData {
  pipelineId: string | number;
  pipelineName: string;
  input: string[];
  aiModel: string;
  output: string[];
  lastExecuted: string;
  status: string;
}
export interface IPipelineListResponse {
  count: number;
  results: IPipelineListResult[],
  total_pages: number;
}
export interface IPipelineListResult {
  id: string | number;
  user: string;
  name: string;
  status: string;
  configurations: IPipelineConfiguration[];
}
export interface IPipelineConfiguration {
  id: string;
  content_type: string;
  content_object: IContent;
  config: any;
}
export interface IContent {
  id: string;
  name: string;
}
export interface ICreatePipeline {
  id: number | string;
  name: string;
  status: string;
  userId: number | string;
  input_output_source_pipeline_configs: [];
  llm_pipeline_configs: [];
}
