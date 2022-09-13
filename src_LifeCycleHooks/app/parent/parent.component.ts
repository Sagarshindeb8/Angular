import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck
{

  constructor()
  {
    console.log("Parent Constructor is called");
  }

  ngOnInit(): void
  {
    console.log("Parent OnInIt is called");
  }

  isChild:boolean = false;

  ToggleChild()
  {
    this.isChild = !this.isChild;
  }

  Message:string="";

  ngOnChanges()
  {
    console.log("Parent OnChanges is called");
  }

  ngDoCheck()
  {
    console.log("Parent ngDoCheck is called");
  }

}
