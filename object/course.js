class course{
    setCourse(c_name,fee,duration)
    {
        this.c_name=c_name,
        this.fee=fee,
        this.duration=duration;
    }
    printcourse()
    {
        console.log(this.c_name,this.fee,this.duration);
    }
}
var ms=new course();
ms.setCourse("mearnstack",350000,6)
ms.printcourse()

var jn=new course();
jn.setCourse("jango",20000,7)
jn.printcourse()
