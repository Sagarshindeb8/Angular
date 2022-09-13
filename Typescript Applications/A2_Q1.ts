//Angular Assignment no: 2, Question no:1.
//Typescript program which contains one function named as Maximum. That function accepts array of numbers and returns the largest number from array.
//Input: 23 89 6 29 56 45 77 32
//Output: Maximum number is 89

function main()
{
    var Arr:number[]=[23,89,6,29,56,45,77,32]
    var ret = 0;

    ret = Maximum(Arr);
    console.log("The Maximum number is: "+ ret);
}
                   
function Maximum(Brr:number[]): number
{   var Max = Brr[0];
    var i = 0;
    for(i=0;i<=Brr.length;i++)
    {
        if(Brr[i] > Max)
        {
            Max = Brr[i];
        }
    }
    return Max;
}

main();