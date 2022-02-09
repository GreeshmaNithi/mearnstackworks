//ARRAY METHODS
//filter()
//map()
//sort()
//reduce()
//find()
//some()
//forEach()

var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ramu","developer","kochi",35000,2],
    [1000,"raju","qa","tvm",35000,1],
    [1000,"arjun","qa","tvm",45000,2],
    [1000,"nithi","ba","bangalore",50000,3],
    [1000,"abhi","ba","bagalore",25000,2],
    [1000,"vish","sale","mumbai",50000,2],
    [1000,"kunju","sale","mumbai",25000,5],

]

//sort method
var Array={
    sort()
    {

    },
    filter()
    {

    }
}


//filter()
// Array.filter() calling of filter method

//find()

// var empDetails=employees.find(emp=>emp[1]=="abhi")
// console.log(empDetails);

//reduce()

// total salary method1:
// var empsal=employees.map(emp=>emp[4]);
// var totalSalary=empsal.reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalSalary);


//method2: chaining of aray methods map and reduce
// var totalSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2);
// console.log(totalSalary);


//min salary
//reduceRight koduthal minimum salary ulle frst employeee kittum default aayt last employee details aan verua.

var minsal=employees.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2);
// var minsal=employees.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2);
console.log(minsal[4]);

//highest salary
// var maxsal=employees.reduce((e1,e2)=>e1[4]>e2[4]?e1:e2)
var maxsal=employees.reduceRight((e1,e2)=>e1[4]>e2[4]?e1:e2)
console.log(maxsal[4]);    //here the 4 is indicate that the index or position of the array.here salary is in 4th position.


//highest experience

var highex=employees.reduce((ee1,ee2)=>ee1[5]>ee2[5]?ee1:ee2);
console.log(highex[1]);
