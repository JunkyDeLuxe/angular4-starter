import { NgModule } from '@angular/core';
import { SharedModule } from '../commons/shared.module';

import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		HomeComponent
	],
	providers: [],
	entryComponents: [
	],
})

export class HomeModule {}
