import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpFallback } from '../components/http/http.fallback.service';

@Component({
	selector: 'my-account',
	templateUrl: './my-account.component.html',
	styleUrls: [ './my-account.component.scss' ]
})

export class MyAccountComponent implements OnInit {
	profile: Observable<any>;

	constructor(r: ActivatedRoute, private httpFallback: HttpFallback) {
		r.data.subscribe((res) => {
			this.profile = res.profile.json();
		}, (err) => {
			this.httpFallback.fallback(err);
		});
	}

	ngOnInit() {
	}
}
