//Angular Assignment no: 2, Question no:2.
//Write a Typescript program which contains one funtion named as Summanation. That function accepts array of numbers and returns the summanation of each number from array
//Input: 23 6 7 4 5 7
//Output: Addition is 52

function main()
{
    
    var Arr:number[] = [23,6,7,4,5,7];
    var Ret:number = 0;

    Ret = Summanation(Arr);
    console.log("The Summanation is: "+ Ret);
}

function Summanation(Brr:number[]):number
{
    var i:number = 0;
    var Sum:number = 0;
  
    
    for(i=0;i<Brr.length;i++)
    {
        Sum = Sum + Brr[i];
    }

    return Sum;
}

main();