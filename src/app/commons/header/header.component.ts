import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { AuthService } from '../../components/auth/auth.service';

@Component({
    selector: 'my-header',
    template: require('./header.component.html'),
    providers: [AuthService]
})

export class HeaderComponent implements OnInit {
    private translateService: TranslateService;
    private authService: AuthService;
    private languages: Array<string>;
    private logged: Boolean;

    constructor(translate: TranslateService, authService: AuthService) {
        this.translateService = translate;
        this.languages = translate.getLangs();
        this.authService = authService;
    }

    ngOnInit() {
        console.log('Header component loaded');
        this.logged = this.authService.loggedIn();

        console.log('user logged => ', this.logged);
    }
}
