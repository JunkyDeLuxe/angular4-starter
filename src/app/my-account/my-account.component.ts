import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'my-account',
	templateUrl: './my-account.component.html',
	styleUrls: [ './my-account.component.scss' ]
})

export class MyAccountComponent implements OnInit {
	profile: Observable<any>;

	constructor(r: ActivatedRoute) {
		r.data.subscribe((res) => {
			this.profile = res.profile.json();
		});
	}

	ngOnInit() {
	}
}
