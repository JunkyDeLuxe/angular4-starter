import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'my-login',
    template: require('./login.component.html')
})

export class LoginComponent implements OnInit {

    submitted: boolean;
    user: User;

    constructor() {}

    ngOnInit() {
        console.log('login page loaded');
        this.submitted = false;
        this.user = new User();
    }

    onSubmit() {
        this.submitted = true;
    }

    get diagnostic() {
        return JSON.stringify(this.user);
    }
}
