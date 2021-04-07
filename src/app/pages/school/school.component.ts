import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
})
export class SchoolComponent implements OnInit {
  form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.minLength(3),
        Validators.required
      ]),
      surname: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
      ]),
    });
  }

  submitForm(): void {
    const formData = {...this.form.value};
    console.log(formData);
    this.form.reset();
  }
}
