var arr=[1,6,4,9,5,100,1000,11,235];
// function compare(n1,n2)
// {
//     if(n1<n2)
//     {
//         return -1;
//     }
//     else{
//         return 1;
//     }
// }

// let com=(n1,n2)=> n1<n2?-1:1
// arr.sort((n1,n2)=> n1<n2?-1:1);
// arr.sort((n1,n2)=> n1-n2);     //ascending order
arr.sort((n1,n2)=> n2-n1);     //decending order

console.log(arr);