import { Injectable } from '@angular/core';
import { HttpService } from '../../../../common-services/http/http.service';
import {
	IEmbeddingModels,
	ILlmSourceResponse,
} from '../../interface/pipeline-config';

@Injectable({
	providedIn: 'root',
})
export class AiModelService {
	pipeline = '/pipeline';

	constructor(private http: HttpService) {}

	getInferenceList() {
		return this.http.get<ILlmSourceResponse[]>(
			`${this.pipeline}/inference_model/`
		);
	}
	getEmbeddingsList() {
		return this.http.get<IEmbeddingModels[]>(
			`${this.pipeline}/embedding_model/`
		);
	}
}
