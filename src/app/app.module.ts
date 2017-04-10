import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
import { BsDropdownModule } from 'ng2-bootstrap'; // ui-bootstrap //
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UnavailableComponent } from './unavailable/unavailable.component';
import { AuthModule } from './components/auth/auth.module';

/** providers **/
import { AuthGuard } from './components/auth/auth-guard.service';
import { AuthService } from './components/auth/auth.service';
import { HttpFallback } from './components/http/http.fallback.service';
import { StoreService } from './components/storage/store.service';

import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

/** routes **/
import { routing } from './app.routing';

// import './app.module.less';
require('./app.component.scss');

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        BsDropdownModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/public/locales', '.json'),
            deps: [Http]
        }),
        routing,
        AuthModule
    ],
    declarations: [
        AppComponent,
        UnavailableComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        StoreService,
        HttpFallback
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
