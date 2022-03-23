import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName : new FormControl('Imran'),
    password : new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      postalCode: new FormControl('')
    })
  })

  // loadApiData() {
  //   this.registrationForm.setValue({---> setValue is used when we have to set values to all the form fields, if u skip a field it gives error
  //     userName: "Bruce",
  //     password : "test",
  //     confirmPassword: "test",
  //     address: {
  //       city: 'city',
  //       state: 'state',
  //       postalCode: "67575758"
  //     }
  //   })
  // }

  loadApiData() {
      this.registrationForm.patchValue({ 
        userName: "Bruce",
        password : "test",
        confirmPassword: "test",
       /*patch value can be used to fill up few of the fields  */ 
      })
    }
}
