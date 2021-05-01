import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  private excursionButton = false;
  private contactsButton = false;

  constructor() {
  }

  getExcursionClick(): boolean {
    return this.excursionButton;
  }

  setExcursionClick(value: boolean): void {
    this.excursionButton = value;
  }

  getContactsClick(): boolean {
    return this.contactsButton;
  }

  setContactsClick(value: boolean): void {
    this.contactsButton = value;
  }

}
