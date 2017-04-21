import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../commons/shared.module';

import { MyAccountComponent } from './my-account.component';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { Response } from '@angular/http';
import { StoreService } from '../components/storage/store.service';
import { HttpFallback } from '../components/http/http.fallback.service';

/** MOVE DEFINITION INTERFACE ? **/
export interface Profile {
	name: string;
	email: string;
}

/** MOVE PROFILE RESOLVER ? **/
@Injectable()
export class ProfileResolver implements Resolve<Response> {
	constructor(private authHttp: AuthHttp,
	            private store: StoreService,
	            private httpFallback: HttpFallback) {
	}

	resolve(): Observable<Response> {
		let profile = this.store.get('profile');

		return this.authHttp.get('/api/profiles/' + profile.id)
			.catch((err) => {
				this.httpFallback.fallback(err);
				return Observable.throw(err);
			});
	}
}

const routes: Routes = [
	{
		path: 'my-account',
		component: MyAccountComponent,
		resolve: { profile: ProfileResolver }
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [
		MyAccountComponent
	],
	providers: [
		ProfileResolver
	]
})

export class MyAccountModule {}
