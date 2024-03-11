import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IStep, IStepperState, initialStepState } from './stepper.service.data';

@Injectable({
	providedIn: 'root',
})
export class StepperService {
	initialStepState = JSON.parse(JSON.stringify(initialStepState));
	private stepperState$: BehaviorSubject<IStepperState> =
		new BehaviorSubject<IStepperState>(this.initialStepState);
	constructor() {}

	changeTheStepperState(
		step: 'inputStep' | 'outputStep' | 'modelStep',
		state: IStep
	): void {
		this.initialStepState[step] = state;
		this.stepperState$.next(this.initialStepState);
	}

	getTheStepperState(): Observable<IStepperState> {
		return this.stepperState$.asObservable();
	}

	clearStepperState() {
		this.initialStepState = JSON.parse(JSON.stringify(initialStepState));
		this.stepperState$.next(this.initialStepState);
	}
}
