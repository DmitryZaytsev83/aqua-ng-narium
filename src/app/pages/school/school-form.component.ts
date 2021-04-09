import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SchoolFormService} from '../../services/school-form.service';

@Component({
  selector: 'app-school',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css'],
})
export class SchoolFormComponent implements OnInit {
  form!: FormGroup;

  constructor(public schoolFormService: SchoolFormService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      studentFIO: new FormControl('', [
        Validators.minLength(3),
        Validators.required
      ]),
      parentFIO: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
      ]),
      birthdate: new FormControl('', [
        Validators.required,
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      schoolNumber: new FormControl('', [
        Validators.required
      ]),
    });
  }

  submitForm(): void {
    const formData = {...this.form.value};
    console.log(formData);
    this.schoolFormService.sendFormData(formData).subscribe(response => {
      console.log(response);
    });
    this.form.reset();
  }
}
