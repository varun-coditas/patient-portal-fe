import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const AuthGuard: CanActivateFn = (route, state) => {
	const router = inject(Router);
	if (typeof window !== 'undefined') {
		const accessToken = localStorage.getItem('token');
		return !!accessToken;
	}
	router.navigateByUrl('/login');
	return false;
};
