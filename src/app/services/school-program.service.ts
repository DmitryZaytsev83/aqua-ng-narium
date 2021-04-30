import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolProgramService {
  private buttonClick = false;

  constructor() {
  }

  getButtonClick(): boolean {
    return this.buttonClick;
  }

  setButtonClick(value: boolean): void {
    this.buttonClick = value;
  }

}
