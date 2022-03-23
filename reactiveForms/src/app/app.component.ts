import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // registrationForm : FormGroup;

  get alternateEmails(){
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  get userName(){
    return this.registrationForm.get('userName');
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''))
  }


  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName :  ['Imran',Validators.required],
    email: [''],
    password :  [''],
    confirmPassword :  [''],
    address : this.fb.group({
      city :  [''],
      state :  [''],
      postalCode:  ['']
    }),
    alternateEmails : this.fb.array([])
  })

  

  loadApiData() {
      this.registrationForm.patchValue({ 
        userName: "Bruce",
        password : "test",
        confirmPassword: "test",
       /*patch value can be used to fill up few of the fields  */ 
      })
    }
}
