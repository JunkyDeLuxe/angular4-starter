/** Shared imports, declarations, providers for all others modules in the application **/

import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';

@NgModule({
	imports: [
		TranslateModule
	],
	exports: [
		TranslateModule
	],
	declarations: []
})

export class SharedModule {}

