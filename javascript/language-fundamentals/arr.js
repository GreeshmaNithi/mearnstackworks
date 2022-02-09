//reduce() function

arr=[1,2,3,6,7,8];

var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);                                  //total sum of the array 

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2);
console.log(min);
// console.log(arr.reduce((n1,n2)=>n1<n2?n1:n2));   //smallest number in that array


var max=arr.reduce((n1,n2)=>n1>n2?n1:n2);
console.log(max);
// console.log(arr.reduce((n1,n2)=>n1>n2?n1:n2));      //biggest nmbr in that array 