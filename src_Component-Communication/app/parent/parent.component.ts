import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'My-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  public parentData:string = "This data is from Parent component";
  public no:number = 121;

  public message:string = ""; 

  ngOnInit(): void {
  }

  //for Template reference variable demo.
  name:string = "Template reference - Data from child comp";

  template()
  {
    alert("Accessing method of child through parent by template ref.")
    //return "Accessing method of child through parent by template ref."
  }

  @Output() public pobj = new EventEmitter();
  public SendData()
  {
    this.pobj.emit("Hello from Parent com to App comp");
  }

}
