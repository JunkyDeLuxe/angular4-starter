import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../components/auth/auth.service';
import { Router } from '@angular/router';
import { StoreService } from '../../components/storage/store.service';

@Component({
	selector: 'my-header',
	templateUrl: './header.component.html',
	providers: [ AuthService ]
})

export class HeaderComponent implements OnInit {
	logged: Boolean;

	constructor(
		private store: StoreService,
		private router: Router,
		private authService: AuthService) {
	}

	ngOnInit() {
		this.logged = this.authService.loggedIn();
	}

	/** just remove the JWT token from the local storage **/
	logout() {
		this.store.del('token');
		this.store.del('profile');
		this.router.navigate(['home']);
	}
}
