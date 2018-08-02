import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../commons/shared.module';
import { AuthGuard } from '../components/auth/auth-guard.service';

import { AboutComponent } from './about.component';

const routes: Routes = [
	{ path: 'about', component: AboutComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
	declarations: [ AboutComponent ],
	imports: [
		RouterModule.forChild(routes),
		SharedModule
	],
	providers: []
})

export class AboutModule {}

