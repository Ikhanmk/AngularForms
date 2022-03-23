import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

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

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''))
  }


  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName :  ['Imran'],
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
