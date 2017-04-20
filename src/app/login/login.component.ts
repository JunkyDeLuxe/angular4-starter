import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Http }  from '@angular/http';
import { HttpFallback } from '../components/http/http.fallback.service';
import { JwtHelper } from 'angular2-jwt';
import { StoreService } from '../components/storage/store.service';
import { Router } from '@angular/router';

// Tslint and Tsconfig don't have globals variables namespaces //
import { isEmpty } from 'lodash';

@Component({
	selector: 'my-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [ JwtHelper ]
})

export class LoginComponent implements OnInit {

	submitted: boolean;
	validated: boolean;
	user: User;
	error: Boolean = false;

	constructor(private http: Http,
	            private jwtHelper: JwtHelper,
	            private storeService: StoreService,
	            private httpFallback: HttpFallback,
	            private router: Router) {
		this.jwtHelper = new JwtHelper();
	}

	ngOnInit() {
		this.submitted = false;
		this.validated = false;
		this.user = new User();
	}

	closeError() {
		this.error = false;
	}

	onSubmit() {
		this.submitted = true;

		if (isEmpty(this.user)) {
			return false;
		}

		this.http.post('/api/login', this.user, {})
			.map(res => {
				return res.json();
			})
			.subscribe((data) => {
				let token = data.token;
				this.storeService.set('token', token, true);

				let profile = this.jwtHelper.decodeToken(token);
				this.storeService.set('profile', profile);
				this.validated = true;

				/** can we force angular state refreshing like with angular ui router ? **/
				setTimeout(() => {
					this.router.navigate(['']).then(() => {
						this.submitted = false;
						window.location.reload();
					});
				}, 1000);
			}, (err) => {
				this.submitted = false;
				if (err && (err.status === 404 || err.status === 409)) {
					this.error = true;
				} else {
					this.httpFallback.fallback(err);
				}
			});
	}

	get diagnostic() {
		return JSON.stringify(this.user);
	}
}
