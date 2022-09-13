import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
///////////////////////////////////////
//Interpolation

  title = 'CompCom';

///////////////////////////////////////
//Property binding using img tag

imgUrl = 'https://static.toiimg.com/photo/msid-77677193/77677193.jpg?80652';

///////////////////////////////////
//Button disable
val:boolean = false;

///////////////////////////////////
//Event binding

count:number=0;
clicked()
{
  this.count++;
}

///////////////////////////////////////////
//ngModel

name:string="";

///////////////////////////////////
//ngModel - split

username:string=""
Demo(arg:string)
{
  this.username = arg;
  if (arg == "XYZ")
  {
    alert("Ala ka parat!");
  }
}


///////////////////////////////////////
//Getters and setters

private user:string="";

get EndUser():string
{
  return this.user;
}

set EndUser(value:string)
{
  this.user = value;
  if (value == "XYZ")
  {
    alert("Ala ka parat!");
  }
}

/////////////////////////////////////

public msg:String = "";


}


