export interface IStep {
	isStepComplete: boolean;
	subSteps: { isComplete: boolean; name: string }[];
}

export interface IStepperState {
	inputStep: IStep;
	outputStep: IStep;
	modelStep: IStep;
}

export const initialStepState: IStepperState = {
	inputStep: {
		isStepComplete: false,
		subSteps: [{ isComplete: false, name: 'Input' }],
	},
	outputStep: {
		isStepComplete: false,
		subSteps: [{ isComplete: false, name: 'Output' }],
	},
	modelStep: {
		isStepComplete: false,
		subSteps: [],
	},
};
