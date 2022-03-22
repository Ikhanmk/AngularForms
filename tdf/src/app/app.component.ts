import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = [ "Medical ", "Science"," Social" ]

  userModel = new User("","robo@test.com",0,'','morning', true)

 constructor(private enrollmentService: EnrollmentService){}

 ngOnInit(){

 }

 onSubmit(){
   this.enrollmentService.enroll(this.userModel).subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete') 
 })
  
}
}
