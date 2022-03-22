import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = [ "Medical ", "Science"," Social" ]

  userModel = new User("","robo@test.com",0,'','morning', true)
}
