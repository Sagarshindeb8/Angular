//Angular Assignment no: 3, Question no:2.
//Write a Typescript program which contains one funtion named as Circle. 

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

    var iRet:number = 0

    //Object 1
    var obj1 = new Circle(10);
    iRet = obj1.Area();
    console.log("The Area of Cricle is: ", iRet);

    //Object 2
    var obj2 = new Circle(5);
    iRet = obj2.Area();
    console.log("The Area of Cricle is: ", iRet);