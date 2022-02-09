// function add(num1,num2)
// {
//     return num1+num2
// }

// function add(n1,n2,n3)
// {
//     return(n1+n2+n3)
// }

// function add(n1,n2,n3,n4)
// {
//     console.log("inside 4 args");
//     return(n1+n2+n3+n4)
// }

// console.log(add(10,20,30,40));
// console.log(add(10,20));

//here it is function overloading is performed.... in java script the function overloading is not supported
//function overloading: sa,e method name 
//in js we can perform spread() for function overloading

//spread(...)
//the ... is the spread operator

function add(...args)
{
    return args.reduce((n1,n2)=>n1+n2)
}
console.log(add(10,20,30));

//fuction for find maximum nmber in the given set
function findMax(...args)
{
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(findMax(1,2,3,4,5,6,7,8,9,10));


var arr=[10,20,30]
arr.push(15,25)
console.log(arr);

