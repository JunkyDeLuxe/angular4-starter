import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BadCredentialsModalComponent } from '../services/modals/bad-credentials/bad-credentials.modal.component';

import { get } from 'lodash';

@Injectable()
export class HttpFallback {
	constructor(private router: Router,
	            private modalService: NgbModal) {
	}

	fallback(err: Response | any) {
		let status = err.status;
		let unavailableService = false;

		/** status === 0 for webpack dev server **/
		if (status >= 500 || status === 0) {
			unavailableService = true;
		} else {
			/** nothing here, manage custom errs from api **/
			if (!err || !err._body) {
				unavailableService = true;
			} else {
				const code = get(JSON.parse(err._body), 'code');

				switch (code) {
					case 'invalid_credentials': {
						this.modalService.open(BadCredentialsModalComponent);
						break;
					}
				}
			}
		}

		if (unavailableService) {
			this.router.navigate(['unavailable-service']);
		}
	}
}
