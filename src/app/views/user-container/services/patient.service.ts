import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PATIENT_DATA } from '../dashboard-page/dashboard.data';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  getPatients() {
    return of(PATIENT_DATA)
  }
}
