//Angular Assignment no: 2, Question no:4.
//Write a typescript program which contains one arrow function named as ChkArmstrong. That function accepts one number and check whether number is Armstrong number or not.
//Input: 153
//Output: It is Armstrong number

function main():void
{
    var value:number = 153;
    var ret:boolean = false;
    ret = CheckArmstrong(value);    
    if(ret == true)
    {
        console.log("The number is an Armstrong number");
    }
    if(ret == false)
    {
        console.log("The number is not an Armstrong number");
    }
}
                   

function Power(iNo1:number,iNo2:number):number
{
	var iMult:number = 1;
	var iCnt:number = 0;
	
	for(iCnt=1;iCnt<=iNo2;iCnt++)
	{
		iMult = iMult*iNo1;
	}
    console.log("iMult: ",iMult);
	return iMult;
}
//var ChkArmstrong = (iNo:number): boolean =>

function CheckArmstrong(iNo:number):boolean
{
	var iDigCnt:number = 0;
	var iTemp:number = 0;
	var iDigit:number = 0;
	var iSum:number = 0;
    var Temp;	

	iTemp = iNo;
    
	
	//calculate no. of digits
	while(iNo != 0)
	{
		iDigCnt++;
        console.log("iDigCnt inside loop: ",iDigCnt);
		iTemp = (iTemp/10);
        Temp = parseInt(iTemp);
        
	}
	
    
	iNo = iTemp;
	

	while(iNo != 0)
	{
		iDigit = iNo % 10;
		iSum = iSum + Power(iDigit,iDigCnt);
		iNo = iNo / 10;
	}
	
	if(iSum == iTemp)
	{
		return true;
	}
	else
	{
		return false;
	}
}

main();