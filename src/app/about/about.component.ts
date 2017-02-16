import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-about',
    template: require('./about.component.html')
})

export class AboutComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('Hello About');
    }
}