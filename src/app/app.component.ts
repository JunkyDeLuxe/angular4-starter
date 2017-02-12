import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})

export class AppComponent {
    title: string;

    constructor() {
        this.title = "Hello from Angular App with Webpack";
    }
}