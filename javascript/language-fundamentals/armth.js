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

//sort employees based on their salary order by desc

employees.sort((emp1,emp2)=>emp2[4]-emp1[4]);
console.log(employees);

//sort employees based on exp order by asc
console.log("experience");
employees.sort((emp1,emp2)=>emp1[5]-emp2[5]);
console.log(employees);

//print all employee names only
for(let employee of employees)
{
    // employee=    [1000,"ram","developer","kochi",25000,1],
    console.log(employee[1]);

}

//print developer details only