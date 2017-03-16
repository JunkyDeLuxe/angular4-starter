import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-login',
    template: require('./login.component.html')
})

export class LoginPage implements OnInit {
    constructor() {

    }

    ngOnInit() {
        console.log('login page loaded');
    }
}