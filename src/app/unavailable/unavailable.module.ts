import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../commons/shared.module';

import { UnavailableComponent } from './unavailable.component';

const routes: Routes = [
	{ path: 'unavailable-service', component: UnavailableComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		SharedModule
	],
	declarations: [ UnavailableComponent ]
})

export class UnavailableModule {}
