import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

/** PROVIDERS **/
import { AuthGuard } from './components/auth/auth-guard.service';
import { AuthService } from './components/auth/auth.service';
// import { HttpFallback } from './components/http/http.fallback.service';
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
		HttpClientModule,
		JwtModule.forRoot({
			config: {
				tokenGetter: () => {
					return localStorage.getItem('token');
				}
				// whitelistedDomains: ['localhost:3001'],
				// blacklistedRoutes: ['localhost:3001/auth/']
			}
		}),
		NgProgressModule,
		FormsModule,
		NgbModule.forRoot(),
		routing,
		SharedModule,
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
		StoreService
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {}
