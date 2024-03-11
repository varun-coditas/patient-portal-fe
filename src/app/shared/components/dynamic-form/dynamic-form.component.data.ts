import {
	AbstractControl,
	ValidationErrors,
	ValidatorFn,
	Validators,
} from '@angular/forms';
import { DropdownInputConfig } from '@coditashq/ng-ada-components';

export interface Ifields {
	name: string;
	type: 'text' | 'number' | 'file' | 'password' | 'dropdown' | 'textarea';
	label?: string;
	placeholder?: string;
	validationRegex?: RegExp;
	helperText?: string;
	fileType?: 'pdf' | 'audio' | 'image' | 'text';
	dropdownConfig?: DropdownInputConfig;
	required?: boolean
}
export interface IDynamicForm {
	name: string;
	type:
		| 'text'
		| 'number'
		| 'file'
		| 'password'
		| 'dropdown'
		| 'innerFields'
		| 'textarea';
	label?: string;
	placeholder?: string;
	validationRegex?: RegExp;
	helperText?: string;
	fileType?: 'pdf' | 'audio' | 'image' | 'text';
	innerFields?: Ifields[];
	dropdownConfig?: DropdownInputConfig;
	required?: boolean;
}

export const validatorsDynamicForm: {
	[key: string]: (control: AbstractControl<any>) => ValidationErrors | null;
} = {
	required: Validators.required,
	email: Validators.email,
};

export function customValidator(regex: RegExp): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } | null => {
		const valid = regex.test(control.value);
		return valid ? null : { customValidator: { value: control.value } };
	};
}
