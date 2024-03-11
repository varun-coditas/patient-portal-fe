import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { ApiErrorService } from '../error/api-error.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const apiErrorService = inject(ApiErrorService);
  const token = localStorage.getItem('token');
  const baseUrl = environment.baseUrl;

  if (token) {
    const authReq = req.clone({
      setHeaders: { Authorization: `Token ${token}` },
      url: baseUrl + req.url,
    });
    return next(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          authService.logout();
        }
        apiErrorService.handleApiError(error);
        return throwError(() => new Error('Unauthorized'));
      })
    );
  }
  const authReq = req.clone({
    url: baseUrl + req.url,
  });
  return next(authReq);
};
