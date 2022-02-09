var arr1=[10,11,12,20,30];
var arr2=[11,20,21,22,30];
var count=0;

// frst case


// for(let num1 of arr1)
// {
//     for(let num2 of arr2)
//     {
//         if(num1==num2)
//         {
//             console.log(num1);
//         }
//         count++;
//     }
// }
// console.log(count);


// second case

var p1=0,p2=0;      //position declared
while((p1<arr1.length) && (p2<arr2.length)) 
{
    if(arr1[p1]==arr2[p2])
    {
        console.log(`common element ${arr1[p1]}`);
        p1++;
        p2++;
    }
    else if(arr1[p1]<arr2[p2])
    {
        p1++;
    }
    else if(arr1[p1]>arr2[p2])
    {
        p2++;
    }
    count++;
}
console.log(count);
