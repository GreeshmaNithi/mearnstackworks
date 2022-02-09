// class Student{
//     setStudent(rol,st_name,course,total)
//     {
//         this.rol=rol;
//         this.st_name=st_name;
//         this.course=course;
//         this.total=total;
//     }
//     printStudent()
//     {
//         console.log(this.rol,this.st_name,this.course,this.total);
//     }

// }
// var s=new Student();
// s.setStudent(1,"neethu","ms",200);
// s.printStudent();



class Student{
    constructor(rol,st_name,course,total)
    {
        this.rol=rol;
        this.st_name=st_name;
        this.course=course;
        this.total=total;
    }
    printStudent()
    {
        console.log(this.rol,this.st_name,this.course,this.total);
    }

}
var s=new Student(1,"neethu","ms",200);
s.printStudent();


//constructor
//initializing instance variable
//name of the constructor in js is constructor
//automatically invoked when an object is created
