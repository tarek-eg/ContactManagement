import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-center',
  templateUrl: './contact-center.component.html',
  styleUrls: ['./contact-center.component.css'],
  providers: [ContactService]
})
export class ContactCenterComponent implements OnInit {

  contacts: Array<Contact>;
  selectedContact: Contact;
  private hideNewContact: boolean = true;

  constructor(private _contactService: ContactService,
    private ref:ChangeDetectorRef
  ) { }

  ngOnInit() {
    this._contactService.getContacts()
      .subscribe(resContactData => this.contacts = resContactData)
  }

  onSelectContact(contact: any) {
    this.selectedContact = contact;
    this.hideNewContact = true;
  }

  onSubmitAddContact(contact: Contact) {
    this._contactService.addContact(contact)
      .subscribe(resNewContact => {
        this.contacts.push(resNewContact);
        this.hideNewContact = true;
        this.selectedContact = resNewContact
        // window.location.reload;
        location = location;    
      });
  }

  onUpdateContactEvent(contact: any){
    this._contactService.updateContact(contact)
      .subscribe(resUpdatedContact => contact = resUpdatedContact);
      this.selectedContact = null;
      // window.location.reload;
      location = location;  
  }

  onDeleteContactEvent(contact: Contact){
    let contactsArray = this.contacts;
    this._contactService.deleteContact(contact)
    .subscribe(resDeletedContcat => {
      for(let i = 0; i < contactsArray.length; i++){
        if(contactsArray[i]._id == contact._id){
          contactsArray.splice(i,1);
        }
      }
    });
    this.selectedContact = null;
    // window.location.reload;
    location = location;
  }

  newContact() {
    this.hideNewContact = false;
  }

}
