import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Contact } from './contact';

@Injectable()
export class ContactService {

  private _getUrl = '/api/contacts';
  private _postUrl = '/api/contact'
  private _putUrl = '/api/contact/';
  private _deleteUrl = '/api/contact/';

  constructor(private _http: Http) { }

  getContacts(){
    return this._http.get(this._getUrl)
    .map((response: Response) => response.json())
  }

updateContact(contact: Contact){
  let headers = new Headers({'Content-type': 'application/json'});
  let options = new RequestOptions({headers: headers});
  return this._http.put(this._putUrl + contact._id, JSON.stringify(contact), options)
      .map((response: Response) => response.json())
}

  addContact(contact: Contact){
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(contact), options)
        .map((response: Response) => response.json())
  }

  deleteContact(contact: Contact){
    return this._http.delete(this._deleteUrl + contact._id)
        .map((response: Response) => response.json())
  
  }
}
