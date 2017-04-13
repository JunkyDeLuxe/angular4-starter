import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import {TranslateModule} from "ng2-translate";

const routes: Routes = [
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		TranslateModule,
		CommonModule,
		FormsModule
	],
	declarations: [ LoginComponent ],
	providers: []
})

export class LoginModule {}
