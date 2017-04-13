import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'my-ngbd-modal-content',
	templateUrl: './hellohome.modal.html'
})

export class NgbdModalContentComponent {
	@Input() name;

	constructor(public activeModal: NgbActiveModal) {}
}
