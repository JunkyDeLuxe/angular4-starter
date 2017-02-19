import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-login',
    template: require('./login.component.html')
})

export class LoginComponent implements OnInit {
    private model: any;
    private loading: Boolean;

    constructor() {
        this.model = {};
        this.loading = false;
    }

    ngOnInit() {
        console.log('init login component');
    }

    submit() {
        console.log('submit login request', this.model);
    }
}
