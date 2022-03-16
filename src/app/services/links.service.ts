import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private contactsButton = false;

  constructor() {
  }

  getContactsClick(): boolean {
    return this.contactsButton;
  }

  setContactsClick(value: boolean): void {
    this.contactsButton = value;
  }

}
