import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ContactService],
  
})
export class HomeComponent implements OnInit {

  contacts: Array<Contact>;

  constructor(private _contactService: ContactService) { }

  ngOnInit() {
    this._contactService.getContacts()
    .subscribe(resContactData => this.contacts = resContactData)
  }

}
