// FILTER
arr=[10,11,12,13,14,15];
//print even numbers
// function evn(num)
// {
//     return num%2==0
// }

// num=>num%2==0

var evn=arr.filter(num=>num%2==0)
console.log(evn);

//print all numbers > 12

// var gnm=arr.filter(num=>num>12);
// console.log(gnm);

console.log(arr.filter(num=>num>12));

arr1=[1,2,3,6,7,8]
//create an array if num<5 num-1 else num+1
//o/p=[0,1,2,7,8,9]
var op=arr1.map(num=>num<5?num-1:num+1);
console.log(op);


var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ramu","developer","kochi",35000,2],
    [1000,"raju","qa","tvm",35000,1],
    [1000,"arjun","qa","tvm",45000,2],
    [1000,"nithi","ba","bangalore",50000,3],
    [1000,"abhi","ba","bagalore",25000,2],
    [1000,"vish","sale","mumbai",25000,2],
    [1000,"kunju","sale","mumbai",25000,5],

]


//print developer details only
console.log("developers");
var dev=employees.filter(emp=>emp[2]=="developer")
console.log(dev);