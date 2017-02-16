import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'my-header',
    template: require('./header.component.html')
})

export class HeaderComponent implements OnInit {
    private languages: Array<string>;
    private language: string;

    constructor(translate: TranslateService) {
        this.languages = translate.getLangs();
        this.language = translate.getDefaultLang();
    }

    ngOnInit() {
        console.log('Header component loaded');
    }

    changeLanguage(lang: string) {
        console.log('want change language ' + lang);
        this.language = lang;
    }
}