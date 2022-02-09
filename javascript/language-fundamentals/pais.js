var arr=[2,3,4,5];
var sum=9;
 var count=1;



for(let i of arr)
{
    for(let j of arr)
    {
        if((i+j)==sum)
        {
            console.log(`${i},${j},pairs`);
           break;
        }
        count++

    }
    
}
console.log(`iteration`, count)

