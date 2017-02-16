import { Component, OnInit } from '@angular/core';

const _styles_ = require('!raw-loader!less-loader!./about.component.less');

@Component({
    selector: 'my-about',
    template: require('./about.component.html'),
    styles: [ _styles_ ]
})

export class AboutComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('Hello About');
    }
}