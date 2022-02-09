// var expenses=[10000,20000,30000,40000]

// var expences={
//     jan:10000,
//     feb:20000,
//     mar:30000,
//     april:40000,
//     may:50000,
//     june:60000
// }

var employee={
    id:1000,
    emp_name:"ram",
    desig:"deve",
    salary:60000,
    exp:1
}
//print employee name
console.log(employee["emp_name"]);
console.log(employee.emp_name);
//print salary
console.log(employee.salary);
//check if tre is a exp 
console.log("exp" in employee);
//add a property 
employee["gender"]="male"
console.log(employee);
//is vaccinated 
employee.isVaccinated=true
console.log(employee);
//updat
employee.salary=30000
console.log(employee);
//update
employee.salary+=5000
console.log(employee);


//studentdetails rol,name,course,total
var student={
    roll:1,
    name:"malu",
    course:"degree",
    total:80
}
//print name of student
console.log(student.name);
//print course of a student
console.log(student.course);
//if there is a gender key in student
console.log("gender" in student);
//add a property in student
student["gender"]="female"
console.log(student);
//add properties
student.isVaccinated=true
console.log(student);
//vaccine:covieshield
student.vaccine="covishield"
console.log(student);
//update a property
student.vaccine="co-vaccine"
console.log(student);
//update total
student.total+=50
console.log(student);

//iteration
for(let key in student)
{
    console.log(key);         //print the key
    console.log(student[key]); //print the value of corresponding key
}

