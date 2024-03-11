import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { IUser } from '../../views/login-container/interface/user';
import { of } from 'rxjs';


const USERS = [
	{
		email: "david@gmail.com",
		password: "123456",
		name: "David Roberson"
	},
	{
		email: "thomas@gmail.com",
		password: "123456",
		name: "Thomas Smith"
	}
]

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	accessToken!: string | null;
	isAuthenticated: boolean = false;
	userData!: IUser;
	constructor(private http: HttpService, private router: Router) {}

	isAuthenticatedUser() {
		return this.isAuthenticated;
	}

	authenticate(
		email: string | undefined | null,
		password: string | undefined | null
	): Observable<any> {
		const body = { email, password };
		const user = USERS.find((u) => u.email === email && u.password === password);
		return of(user);
		// return this.http.post<{ token: string }>(`/user/login/`, body);
	}

	logout(): void {
		this.accessToken = null;
		this.isAuthenticated = false;
		this.router.navigateByUrl('/login');
		window.localStorage.clear();
	}

	loginSuccess(token: any) {
		window.localStorage.setItem('token', token);
		this.router.navigateByUrl('/patient-details');
	}

	getUserApi() {
		return of(USERS[0])
	}

	setUser(user: IUser) {
		this.userData = user;
	}
}
