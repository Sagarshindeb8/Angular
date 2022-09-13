//Angular Assignment no: 3, Question no:3.
//Program to calculate the circumference of a circle.

class Circle
{
    Radius:number;
    PI:number;

    constructor(no1:number)
    {
        this.Radius = no1;
        this.PI = 3.14;
    }

    Area():number
    {
        var result = 0;
        result = this.PI * this.Radius*this.Radius;
        return result;
    }

}

class CircleX extends Circle
{
    Circumference():number
    {
        var result = 0;
        result = 2 * this.PI * this.Radius;
        return result;
    }
}

    var iRet:number = 0

    //Object 1
    var obj1 = new CircleX(10);
    iRet = obj1.Area();
    console.log("The Area of Cricle is: ", iRet);
    iRet = obj1.Circumference();
    console.log("The Circumference of Cricle is: ", iRet);

    //Object 2
    var obj2 = new CircleX(5);
    iRet = obj2.Area();
    console.log("The Area of Cricle is: ", iRet);
    iRet = obj2.Circumference();
    console.log("The Circumference of Cricle is: ", iRet);