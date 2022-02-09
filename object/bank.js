class Bank
{
    account_details = {
        1000: { account_number: 1000, balance: 3000, password: "userone", transactions: [] },
        1001: { account_number: 1001, balance: 2000, password: "usertwo", transactions: [] },
        1002: { account_number: 1002, balance: 4000, password: "userthree", transactions: [] },
        1003: { account_number: 1003, balance: 5000, password: "userfour", transactions: [] }
    }

    validate(acno)
    {
        return acno in this.account_details?true:false
    }
    authenticate(acno, password)
    {
        if(this.validate(acno))
     {
        let pwd = this.account_details[acno].password
        if (pwd == password) 
        {
            return "login access"
        }
        else
        {
            return "invalid password"
        }
    }
    else 
    {
        return "invalid accnt nmbr"
    }
    }

    getBalance(acno)
    {
        if(this.validate(acno))
        {
            return this.account_details[acno].balance;
        }
        else{
            return "invalid account number"
        }
    }

    fundTransfer(fromAcno,toAcno,amount)
    {
        if(this.validate(fromAcno) && this.validate(toAcno))
        {
            let avlBal=this.getBalance(fromAcno)
            if(amount>avlBal)
            {
                return "transaction failed because insufficient balance"
            }
            else
            {
                this.account_details[fromAcno].balance-=amount
                this.account_details[toAcno].balance+=amount
            }
        }
        else
        {
            return "invalid transaction"
        }
    }
    
}
var obj=new Bank()
console.log(obj.validate(1007));
console.log(obj.authenticate(1000,"userone"));
console.log(obj.getBalance(1000));
// console.log(obj.fundTransfer(1000,1002,1000));
// console.log(obj.getBalance(1000));
console.log(obj.fundTransfer(1000,1002,1000));
console.log(obj.getBalance(1002));
console.log(obj.getBalance(1000));