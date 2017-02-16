import { Component, OnInit } from '@angular/core';

const _styles_ = require('!raw-loader!less-loader!./home.component.less');

@Component({
    selector: 'my-home',
    template: require('./home.component.html'),
    styles: [ _styles_ ]
})

export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('Hello Home');
    }
}

