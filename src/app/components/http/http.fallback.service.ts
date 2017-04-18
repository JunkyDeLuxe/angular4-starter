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

		if (status >= 500) {
			unavailableService = true;
		} else {
			/** nothing here, manage custom errs from api **/
			const code = get(JSON.parse(err._body), 'code');

			switch (code) {
				case 'bad_credentials': {
					this.modalService.open(BadCredentialsModalComponent);
					break;
				}
			}
		}

		if (unavailableService) {
			this.router.navigate(['unavailable-service']);
		}
	}
}
