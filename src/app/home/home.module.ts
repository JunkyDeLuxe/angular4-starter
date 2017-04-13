import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate';

import { HomeComponent } from './home.component';
import { NgbdModalContentComponent } from '../components/services/modals/hellohome/hellohome.modal.component';

@NgModule({
	imports: [
		TranslateModule,
	],
	declarations: [
		NgbdModalContentComponent,
		HomeComponent
	],
	providers: [],
	entryComponents: [
		NgbdModalContentComponent
	],
})

export class HomeModule {}
