import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../commons/shared.module';

import { LoginComponent } from './login.component';
import { BadCredentialsModalComponent } from '../components/services/modals/bad-credentials/bad-credentials.modal.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		SharedModule,
		CommonModule,
		FormsModule
	],
	declarations: [
		BadCredentialsModalComponent,
		LoginComponent,
	],
	entryComponents: [
		BadCredentialsModalComponent
	],
	providers: []
})

export class LoginModule {}
