import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Http }  from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { StoreService } from '../components/storage/store.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-login',
    template: require('./login.component.html'),
    providers: [JwtHelper]
})

export class LoginComponent implements OnInit {

    submitted: boolean;
    validated: boolean;
    user: User;

    constructor(
        private http: Http,
        private jwtHelper: JwtHelper,
        private storeService: StoreService,
        private router: Router) {
        this.jwtHelper = new JwtHelper();
    }

    ngOnInit() {
        console.log('login page loaded');
        this.submitted = false;
        this.validated = false;
        this.user = new User();
    }

    onSubmit() {
        this.submitted = true;

        this.http.post('/api/sessions', this.user, {})
            .toPromise()
            .then((res) => {
                let token = res.json();
                this.storeService.set('id_token', token);

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
            });
    }

    get diagnostic() {
        return JSON.stringify(this.user);
    }

    // private handleError (error: Response | any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     let errMsg: string;
    //     if (error instanceof Response) {
    //         const body = error.json() || '';
    //         const err = body.error || JSON.stringify(body);
    //         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    //     } else {
    //         errMsg = error.message ? error.message : error.toString();
    //     }
    //     console.error(errMsg);
    //     return Promise.reject(errMsg);
    // }
}
