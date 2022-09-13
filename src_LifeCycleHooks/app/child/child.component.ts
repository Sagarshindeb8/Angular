import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck
{
  constructor()
  {
    console.log("Child Constructor is called");
  }

  ngOnInit(): void
  {
    console.log("Child OnInIt is called");
  }

  ngOnDestroy()
  {
    console.log("Child OnDestroy is called");
  }

  @Input() Message:string ="";

  ngOnChanges(changes: SimpleChanges)
  {
    console.log(changes);
    console.log("Child OnChanges is called");
  }

  ngDoCheck()
  {
    console.log("Child ngDoCheck is called");
  }

}
