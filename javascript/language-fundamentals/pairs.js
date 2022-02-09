arr.sort((n1,n2)=>n1-n2);

var pairNum=7;
// var element=11;
var count=1,flag=0;
var lower=0,upper=arr.length-1
while(lower<upper)
{
    let curSum=arr[lower]+arr[upper];
    
    if(curSum==pairNum)
    {
        flag=1;
        console.log(`pair ${arr[lower]},${arr[upper]}`);
        break;
    }
    else if(curSum<pairNum)
    {
        lower++;
    }
    else if(curSum>pairNum)
    {
        upper--;
    }
}
// console.log(`${pairNum},${curSum},pairs`);
// console.log(count);
if(flag==0)
{
    console.log("no pair");
}