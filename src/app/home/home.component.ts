import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContentComponent } from '../components/services/modals/hellohome/hellohome.modal.component';

@Component({
	selector: 'my-home',
	templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

	constructor(private modal: NgbModal,
	            private modalService: NgbModal) {
	}

	ngOnInit() {
		console.log('Hello Home');
		const modalRef = this.modalService.open(NgbdModalContentComponent);
	}
}
