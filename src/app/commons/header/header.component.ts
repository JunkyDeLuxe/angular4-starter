import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-header',
    template: require('./header.component.html')
})

export class HeaderComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('Header component loaded');
    }
}