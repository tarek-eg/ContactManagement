import { Component, OnInit, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
import { Subject } from 'rxjs/Subject';
import { ContactService } from '../contact.service';
import { SearchFilterPipe } from '../search-filter.pipe';


@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  inputs:['contacts'],
  outputs: ['SelectContact'],
})
export class ContactListComponent implements OnInit {


  public SelectContact = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  onSelect(contact: Contact){
    this.SelectContact.emit(contact);
  }
}
