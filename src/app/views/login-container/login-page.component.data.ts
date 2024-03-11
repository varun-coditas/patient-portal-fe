import { FormControl } from '@angular/forms';
export function customEmailValidator(control: FormControl) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (control.value && !emailPattern.test(control.value)) {
    return { invalidEmail: true };
  }
  return null;
}
