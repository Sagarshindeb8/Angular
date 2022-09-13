//Angular Assignment no: 2, Question no:3.
//Program to display the second largest number from an array.

function main():void
{
    var Arr:number[] = [23,89,6,29,56,45,77,32];
    var Ret:number = 0;
    Ret = Maximum(Arr);    
    console.log("The second largest number in the array is: "+ Ret);
}
                   
function Maximum(Brr:number[]):number
{
    var iCnt:number = 0;
    var largest:number = Brr[0];
    var SecLargest = 0;
    

    for(iCnt=0;iCnt<Brr.length;iCnt++)
    {
        if(Brr[iCnt] > largest)
        {
            largest = Brr[iCnt];
        }  
    }
    for(iCnt=0;iCnt<Brr.length;iCnt++)
    {
        if(Brr[iCnt]>SecLargest && Brr[iCnt]< largest)
        {
            SecLargest = Brr[iCnt];
        }
    }

    return SecLargest;
}

main();