import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
	imports: [
		TranslateModule,
		SlimLoadingBarModule.forRoot()
	],
	exports: [
		TranslateModule,
		SlimLoadingBarModule
	],
	declarations: []
})

export class SharedModule {}

