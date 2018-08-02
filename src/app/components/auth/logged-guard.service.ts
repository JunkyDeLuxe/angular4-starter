import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuardService implements CanActivate {

	constructor(private router: Router) {}

	canActivate(): Observable<boolean> | Promise<boolean> | boolean {
		return false;
	}

	// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
	// 	return this.session.islogged$
	// 			.map((isLogged) => {
	// 				if (isLogged) {
	// 					return true;
	// 				}
	// 				this.router.navigate(['login']);
	// 				return false;
	// 			})
	// 			.take(1);
	// }
}