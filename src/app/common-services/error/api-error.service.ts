import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DialogService } from '@coditashq/ng-ada-components';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiErrorComponent } from './api-error/api-error.component';

@Injectable({
  providedIn: 'root',
})
export class ApiErrorService {
  private apiError: BehaviorSubject<null | HttpErrorResponse> =
    new BehaviorSubject<null | HttpErrorResponse>(null);
  constructor(private dialogService: DialogService) {}

  setApiError(error: HttpErrorResponse) {
    this.apiError.next(error);
  }

  getApiError(): Observable<HttpErrorResponse | null> {
    return this.apiError.asObservable();
  }

  handleApiError(error: HttpErrorResponse): void {
    this.setApiError(error);
    this.dialogService.open(
      {
        title: 'Cannot complete the action',
        subtitle: '',
        type: 'default',
        showCloseIcon: true,
      },
      ApiErrorComponent
    );
  }
}
