import { Component, OnInit } from '@angular/core';
import { ApiErrorService } from '../api-error.service';

@Component({
  selector: 'app-api-error',
  standalone: true,
  imports: [],
  templateUrl: './api-error.component.html',
  styleUrl: './api-error.component.scss',
})
export class ApiErrorComponent implements OnInit {
  status: number | undefined = 400;
  message: string | undefined = 'Something went wrong with api';
  url!: string | null | undefined;
  constructor(private apiErrorService: ApiErrorService) {}
  ngOnInit(): void {
    this.getError();
  }
  getError() {
    this.apiErrorService.getApiError().subscribe((res) => {
      this.status = res?.status;
      this.message = res?.message;
      this.url = res?.url;
    });
  }
}
