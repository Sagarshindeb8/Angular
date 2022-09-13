import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngSwitch Directive';

  Branch:string = "";

  IncomeTax:number = 0;

  //ngStyle: dyanamic variable implementation
  MyColor:string = "yellow";

  //ngStyle: dyanamic variable implementation
  TextColor:string = "green";

  //ngClass: dyanamic variable implementation
  StyleClass:string = "c3";

  //ngClass: conditional class
  ConditionStyleClass:string = "c4";

}
