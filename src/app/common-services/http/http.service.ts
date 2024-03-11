import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) { }

  post<T>(url: string, body: any) {
    return this.http.post<T>(url, body);
  }

  get<T>(url: string) {
    return this.http.get<T>(url);
  }

  put<T>(url: string, id: number | string, body?: any) {
    return this.http.put<T>(`${url}${id}/`, body);
  }

  delete<T>(url: string) {
    return this.http.delete<T>(url);
  }
}
