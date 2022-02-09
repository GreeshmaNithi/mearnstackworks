//object oriented programming
//clss=>desogn pattern,plan,or template
//object=> a real world entity
//reference=>


//object
// var employee={
//     name:"ram",
//     age:25,
//     gender:"male"
// }
//class
class employee{
    setEmployee(name,age,gender)
    {
        this.name=name;
        this.age=age;
        this.gender=gender
    }
    printEmployee()
        {
            console.log(this.name,this.age,this.gender);
        }
    
}
//creating object syntax
//refname=new classname
var emp=new employee();   //object1
emp.setEmployee("ram",20,"male");
emp.printEmployee();
var emp1=new employee();  //object2
emp1.setEmployee("nithi",30,"male");
emp1.printEmployee();





