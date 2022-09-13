//Angular Assignment no: 1, Question no:2.
//Program to calculate the area of circle.

function find():void
{
    var radius:number = 5;
    var ret:number = 0;

    ret = Area(radius);
    console.log("Area of circle is: "+ ret);
}
                   
function Area(rad: number): number
{
    var pi = 3.14;
    var A:number = pi * rad * rad;
    return A;
}

find();