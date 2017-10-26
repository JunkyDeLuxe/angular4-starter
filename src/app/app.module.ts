import { NgModule } from '@angular/core';
import { HttpModule, Http, BrowserXhr } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserModule }  from '@angular/platform-browser';
import { TranslateStaticLoader, TranslateLoader, TranslateModule } from 'ng2-translate';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';

/** PROVIDERS **/
import { AuthGuard } from './components/auth/auth-guard.service';
import { AuthService } from './components/auth/auth.service';
import { HttpFallback } from './components/http/http.fallback.service';
import { StoreService } from './components/storage/store.service';

/*** MODULES ***/
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { MyAccountModule } from './my-account/my-account.module';
import { AboutModule } from './about/about.module';
import { UnavailableModule } from './unavailable/unavailable.module';

import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { SharedModule } from './commons/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgProgressModule,
        FormsModule,
	    NgbModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/public/locales', '.json'),
            deps: [Http]
        }),
        routing,
        SharedModule,
        AuthModule,
	    HomeModule,
	    LoginModule,
	    MyAccountModule,
	    AboutModule,
	    UnavailableModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        StoreService,
        HttpFallback,
        { provide: BrowserXhr, useClass: NgProgressBrowserXhr }
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
