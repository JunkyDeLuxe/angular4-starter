import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'my-bad-credentials-modal',
	templateUrl: './bad-credentials.modal.component.html'
})

export class BadCredentialsModalComponent {
	@Input() name;

	constructor(public activeModal: NgbActiveModal) {}
}
