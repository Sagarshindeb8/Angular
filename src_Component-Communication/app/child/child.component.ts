import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() public parentMessage:string = "";
  @Input() public p1:number = 0;

  @Output() public eobj = new EventEmitter();

  public SendMessage()
  {
    this.eobj.emit("Thanks for your message parent");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
