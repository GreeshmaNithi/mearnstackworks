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

//print all employee name only

for(let employee of employees)
{
    // console.log(employee); print all the employees values
    console.log(employee[1]); //based on array index it will print a[1] location values that is name of the employee
    // console.log(employee[3]); 
}

// print the total number of employees

console.log(employees.length);

//print developer details

for(let emp of employees)
{
    if(emp[2]=="developer")
    {
        console.log(emp);
    }
}

//print employee details whose salary > 30,000
console.log("salary>35000");
for(let employee of employees)
{
    if(employee[4]>35000)
    {
        console.log(employee);
    }
}

//print details of employee arjun
console.log("details of arjun");
for(let employ of employees)
{
    if(employ[1]=="arjun")
    {
        console.log(employ);
    }
}