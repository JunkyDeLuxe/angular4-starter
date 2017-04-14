import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../commons/shared.module';

import { LoginComponent } from './login.component';

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
	declarations: [ LoginComponent ],
	providers: []
})

export class LoginModule {}
