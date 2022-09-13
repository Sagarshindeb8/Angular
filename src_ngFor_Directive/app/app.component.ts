import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'ngFor Directive';

  Books = [
    {
      "Name" : "Angular",
      "Domain" : "Web",
      "Price" : 500
    },
    {
      "Name" : "Java",
      "Domain" : "Programming",
      "Price" : 300
    },
    {
      "Name" : "C++",
      "Domain" : "System",
      "Price" : 700
    },
    {
      "Name" : "Python",
      "Domain" : "ML",
      "Price" : 600
    },
    {
      "Name" : "Android",
      "Domain" : "Mobile",
      "Price" : 350
    },
    {
      "Name" : "Database",
      "Domain" : "DBMS",
      "Price" : 250
    },
  
  ]

}
