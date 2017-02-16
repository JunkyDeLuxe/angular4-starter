import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // ui-bootstrap //
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';

import { AppComponent } from './app.component';

import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

/** routes **/
import { routing } from './app.routing';

import './app.module.less';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/public/locales', '.json'),
            deps: [Http]
        }),
        routing
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}