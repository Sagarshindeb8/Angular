import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventBinding';

sayHello()
{
  console.log("Hello!");
}


Count:number = 0;
ClickCount()
{
  this.Count++;
}

color = "";
MouseHover()
{
  console.log("MouseHovered");
}
 
value="";
handleInput(event:any) {
  this.value = (event.target as HTMLInputElement).value;
}

val="";
handleInput1(element:any) {
  this.val=element.value;
}

msg:string = "";
OnAdd(event:any)
{
  this.msg = event.target.value + " added to Cart.";
}

MyCourse:string ="";
GetInfoF(myval:any)
{
  this.MyCourse = myval.value;
}
 


}
