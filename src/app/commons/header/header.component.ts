import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'my-header',
    template: require('./header.component.html')
})

export class HeaderComponent implements OnInit {
    private translateService: TranslateService;
    private languages: Array<string>;

    constructor(translate: TranslateService) {
        this.translateService = translate;
        this.languages = translate.getLangs();
    }

    ngOnInit() {
        console.log('Header component loaded');
    }
}