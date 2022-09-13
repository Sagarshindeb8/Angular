import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//String
title = 'PropertyBinding';
public name1 = "Sachin";
public name2 = " Tendulkar";

//Number
public no1 = 10;
public no2 = 20;
public ans = this.no1 + this.no2;

//Image
ImgLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNe2tqaxR2ymiqjjk2PA0b10NO9N8650Cs5Q&usqp=CAU";


//Toggle Button
bool:boolean = false;
isUnchanged = true;

//class
public variable1 = "classStyle classColor"
booleanVal:boolean = true;
PlaceValue = "Enter text here";
ObjVal = 
{
  classColor:false,
  classStyle:true,
  classSize:true
}
 
getClass() 
{
  return 'classStyle classColor';
}

getColor() 
{
  return 'yellow';
}

public status:string ='merror';

//Link
TutorialLink = "https://www.w3schools.com/html/html_attributes.asp";

}

