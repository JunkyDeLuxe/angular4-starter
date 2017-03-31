import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HttpFallback {
    constructor(private router: Router) {}

    fallback(error: Response | any) {
        let status = error.status;
        let unavailableService = false;

        if (status >= 500) {
            unavailableService = true;
        } else {
            /** nothing here, manage custom errors from api **/
        }

        if (unavailableService) {
            this.router.navigate(['unavailable-service']);
        }
    }
}
