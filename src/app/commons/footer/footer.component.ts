import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-footer',
    template: require('./footer.component.html')
})

export class FooterComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('Footer component loaded');
    }
}
