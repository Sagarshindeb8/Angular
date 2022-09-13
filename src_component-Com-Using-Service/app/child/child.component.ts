import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
  constructor(private _interactionService:InteractionService) { }

  public StudentReplyGreet:string="";
  public StudentReplyAppreciate:string="";
  public msg1:string="";
  public msg2:string="";

  ngOnInit(): void 
  {
    this._interactionService.teacherMessage.subscribe
    (
      Message =>
      {
        if(Message == "Good Morning Student!")
        {
          this.msg1 = Message;
          this.StudentReplyGreet = "Good Morning Teacher!!";
          //alert("Good Morning Teacher!!");
        }
        else if(Message == "Well Done Student!!")
        {
          this.msg2 = Message;
          this.StudentReplyAppreciate = "Thank you Teacher!!"
          //alert("Thank you Teacher!!");
        }
      }        
    );
  }

}
