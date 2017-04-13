import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

import { UnavailableComponent } from './unavailable.component';

const routes: Routes = [
	{ path: 'unavailable-service', component: UnavailableComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		TranslateModule
	],
	declarations: [ UnavailableComponent ]
})

export class UnavailableModule {}
