import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
	constructor(private jwtHelperServie: JwtHelperService) {}

	loggedIn() {
		return !this.jwtHelperServie.isTokenExpired();
	}
}
