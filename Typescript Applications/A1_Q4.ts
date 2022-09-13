//Angular Assignment no: 1, Question no:4.
//Program to check whether the given number is prime or not.

function find():void
{
    var no1:number = 11;
    var ret:Boolean = false;
    ret = ChkPrime(no1);    
    if(ret == true)
    {
        console.log("The number is not prime");
    }
    if(ret == false)
    {
        console.log("The number is prime");
    }
}
                   
function ChkPrime(value1:number): boolean
{
    var iCnt:number = 0;   
    for(iCnt=2;iCnt<value1;iCnt++)
    {         
       if((value1 % iCnt) == 0)
       {
            return true;
       }
       else
       {
           return false;
       }
    }
}

find();