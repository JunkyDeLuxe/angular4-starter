import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-home',
    template: require('./home.component.html')
})

export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('Hello Home');
    }
}

