import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compcomDemo';


  constructor(private _interactionService:InteractionService)
  { }

  public greet:string = ""; 
  GreetStudent()
  {
    this._interactionService.sendMessgae(this.greet = "Good Morning Student!");
  }

  public appreciate:string = "";
  AppreciateStudent()
  {
    this._interactionService.sendMessgae(this.appreciate = "Well Done Student!!");
  }

}

