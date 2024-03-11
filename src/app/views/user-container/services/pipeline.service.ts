import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { HttpService } from '../../../common-services/http/http.service';
import { IPagination } from '../interface/pagination';
import {
  ICreatePipeline,
  IPipelineListResponse,
  IPipelineTableData,
} from '../interface/pipeline-history';

@Injectable({
  providedIn: 'root',
})
export class PipelineService {
  private selectedPipeline: BehaviorSubject<IPipelineTableData | null> =
    new BehaviorSubject<IPipelineTableData | null>(null);

  pipelineId!: string;

  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }
  createPipeline(pipelineName: string) {
    return this.http.post<ICreatePipeline>('/pipeline/', {
      name: pipelineName,
      status: "IN_DRAFT"   // TODO: need to remove this key, once backend team added support for status
    });
  }
  getPipelineList({
    page = '1',
    limit = '8',
    sort_by = 'pipelineName',
    order = '1',
    search = '',
  }: IPagination) {
    const queryParams = `?page=${page}&limit=${limit}&sort_by=${sort_by}&order=${order}&search=${search}`;
    return this.http
      .get<IPipelineListResponse>(
        `/pipeline${queryParams}`
      )
      .pipe(debounceTime(1000), distinctUntilChanged());
  }
  deletePipelines(id: string | number) {
    return this.http.delete(`/pipeline/${id}`);
  }

  getPipelineTableRow(): Observable<IPipelineTableData | null> {
    return this.selectedPipeline.asObservable();
  }

  setPipelineTableRow(newValue: IPipelineTableData): void {
    this.selectedPipeline.next(newValue);
  }
  getPipelineIdFromUrl(routeSnapshot: ActivatedRouteSnapshot): number {
    return Number(routeSnapshot.params['id']);
  }
  setPipelineId(id: string) {
    this.pipelineId = id;
  }
  getPipelineId(): string {
    return this.pipelineId;
  }
}
