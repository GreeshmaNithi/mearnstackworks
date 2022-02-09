arr=[10,11,12,13,14,15];
//find squares of all numbers
//normal method1:
// function squ(num)
// {
//     return num**2
// }
// squ=arr.map(squ);
// console.log(squ);
var squ=arr.map(num=>num**2);
console.log(squ);

//find qubes of all nmbrs
// function cube(num)
// {
//     return num**3;method1:

// }
// var cube=arr.map(cube);
// console.log(cube);
var cube=arr.map(num=>num**3);
console.log(cube);
//print evn nmbr


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

//print all employees names only
var ename=employees.map(emp=>emp[1]);
console.log(ename);

//print the experience 
console.log(employees.map(emp=>emp[5]));


var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,8,5],
    [3,"kottayam",50000,500,45000,8,5],
    [4,"alappuzha",25000,150,24000,9,5],
    [5,"ernakulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"idukki",1000,50,9500,9,6],
    [8,"idukki",1000,50,10000,9,6],



]

//print all +ve case count
console.log(covid_data.map(pstv=>pstv[2]));
//print all +ve count and district
console.log(covid_data.map(data=>[data[1],data[2]]));



