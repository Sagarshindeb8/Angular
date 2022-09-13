//Angular Assignment no: 3, Question no:1.
//Typescript program which contains one class named as Arithmetic for Addition, Sub, Mult and Division.

class Arithmetic
{
    Number1:number;
    Number2:number;

    constructor(no1:number, no2:number)
    {
        this.Number1 = no1;
        this.Number2 = no2;
    }

    Addition():number
    {
        var ans = 0;
        ans = this.Number1 + this.Number2;
        return ans;
    }

    Subtraction():number
    {
        var ans = 0;
        ans = this.Number1 - this.Number2;
        return ans;
    }

    Multiplication():number
    {
        var ans = 0;
        ans = this.Number1 * this.Number2;
        return ans;
    }

    Division():number
    {
        var ans = 0;
        ans = this.Number1 / this.Number2;
        return ans;
    }
    
}

var iRet = 0

//Object 1
var obj1 = new Arithmetic(10,20);
iRet = obj1.Addition();
console.log("The Addition is: ", iRet);

iRet = obj1.Subtraction();
console.log("The Subtraction is: ", iRet);

iRet = obj1.Multiplication();
console.log("The Multiplication is: ", iRet);

iRet = obj1.Division();
console.log("The Division is: ", iRet);

//Object 2
var obj2 = new Arithmetic(20,10);
iRet = obj2.Addition();
console.log("The Addition is: ", iRet);

iRet = obj2.Subtraction();
console.log("The Subtraction is: ", iRet);

iRet = obj2.Multiplication();
console.log("The Multiplication is: ", iRet);

iRet = obj2.Division();
console.log("The Division is: ", iRet);

