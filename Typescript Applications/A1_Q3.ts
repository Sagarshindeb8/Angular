//Angular Assignment no: 1, Question no:3.
//Program to display the factors of a given number.

function find():void
{
    var no1:number = 20;
    DisplayFactors(no1);    
}
                   
function DisplayFactors(value1:number): void
{
    var iCnt:number = 0;   
    for(iCnt=1;iCnt<value1;iCnt++)
    {   
       //console.log("The factors are: ");
       if((value1 % iCnt) == 0)
       {
            console.log(iCnt);
       }
    }
}

find();