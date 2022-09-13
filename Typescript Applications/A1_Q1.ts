//Angular Assignment no: 1, Question no:1.
//Program to find the largest value from 3 input paramaters.

function find():void
{
    var no1: number = 23;
    var no2: number = 89;
    var no3: number = 6;
    var ret = 0;

    ret = Maximum(no1,no2,no3);
    console.log("The Maximum value is: "+ ret);
}
                   
function Maximum(value1: number,value2: number,value3: number): number
{
    if((value1>value2) && (value1>value3))
    {
        return value1;
    }
    if((value2>value1) && (value2>value3))
    {
        return value2;
    }
    else((value3>value1) && (value3>value2))
    {
        return value3;
    }

}

find();