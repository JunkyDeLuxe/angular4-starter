import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-unavailable-service',
    template: require('./unavailableservice.component.html')
})

export class UnavailableServiceComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('UnavailableServiceComponent');
    }
}

