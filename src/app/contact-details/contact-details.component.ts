import { Component, OnInit, EventEmitter } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  inputs: ['contact'],
  outputs: ['updateContactEvent', 'deleteContactEvent']
})
export class ContactDetailsComponent implements OnInit {

  private updateContactEvent = new EventEmitter();
  private deleteContactEvent = new EventEmitter();

  contact: any;
  constructor() { }

  ngOnInit() {
  }

  updateContact() {
    this.updateContactEvent.emit(this.contact)
  }
  deleteContact() {
    this.deleteContactEvent.emit(this.contact)
    location.reload;
  }
}
