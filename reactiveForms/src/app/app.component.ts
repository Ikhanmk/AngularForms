import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder){}

  registrationForm = this.fb.group({
    userName :  ['Imran'],
    password :  [''],
    confirmPassword :  [''],
    address : this.fb.group({
      city :  [''],
      state :  [''],
      postalCode:  ['']
    })
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
