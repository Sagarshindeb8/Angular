import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'In built Directive - ngIf';
//////////////////////////////////////////////////////////////////
  //ngIf directive
  AdminLogInStatus:boolean = true;

  //ngIf directive using NOT '!'
  UserLogInStatus:boolean = false;

  //ngIf directive using OR '||'
  Person1LogInStatus:boolean = true;
  Person2LogInStatus:boolean = true;

  //ngIf directive using AND '&&'
  Employee1LogInStatus:boolean = true;
  Employee2LogInStatus:boolean = true;
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//ngIf else directive
Admin1LogInStatus:boolean = true;
//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////
//ngIf then else directive
Admin2LogInStatus:boolean = true;
//////////////////////////////////////////////////////////////////

}
