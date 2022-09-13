//Angular Assignment no: 1, Question no:5.
//Program to check whether the given number is prime or not.

function find():void
{
    var no1:number = 21;
    Fibonacci(no1);  
}
                   
function Fibonacci(value1:number): void
{
    var iCnt:number = 0;
    var t1:number = 0;
    var t2:number = 1;
    var t3:number = 0;

    console.log("Fibonacci Series: ");
    while(t3 <= value1)
    {         
      console.log(t3);
      t3 = t1 + t2;
      t1 = t2;
      t2 = t3;      
      
    }
}

find();