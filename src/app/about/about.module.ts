import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from 'ng2-translate';
import { AuthGuard } from '../components/auth/auth-guard.service';

import { AboutComponent } from './about.component';

const routes: Routes = [
	{ path: 'about', component: AboutComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		TranslateModule
	],
	declarations: [ AboutComponent ],
	providers: []
})

export class AboutModule {}
