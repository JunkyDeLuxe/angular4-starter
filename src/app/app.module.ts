import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // ui-bootstrap //

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
        NgbModule.forRoot(),
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