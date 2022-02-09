//createAccount
//withdrow(),deposit(),balanceEnquiry()

class Bank{
    creatAccount(acno,pname,pan,branch,phone,balance)
    {
        this.acno=acno,
        this.pname=pname,
        this.pan=pan,
        this.branch=branch,
        this.phone=phone,
        this.balance=balance;
    }
    withdrow(amount)
    {
        if(amount>this.balance)
        {
            console.log(`transaction failed insufficient balance on your ${this.acno}`);
        }
        else
        {
            this.balance=amount;
            console.log(`your account ${this.acno} has been debited with amount ${amount} you aval bal ${this.balance}`);
            
        }
    }
    deposit(amount)
    {
        this.balance+=amount;
        console.log(`your account ${this.acno} has been credited with amount ${amount} you aval bal ${this.balance}`);



    }
    balanceEnquiry()
    {
        console.log(`your available balance=${this.balance}`);

    }    
}
var bb=new Bank();
bb.creatAccount(324566781,"malu",654321,"kannur",78654321,3000);
bb.withdrow(100);
bb.deposit(2000);
bb.balanceEnquiry();