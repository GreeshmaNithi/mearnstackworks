var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
//  q1  total number accounts
var accnt=accounts.length;
console.log(accnt);
   
//q2  print all account numbers whose ac-type savings
console.log("savngs");
accounts.filter(ac=>ac.ac_type=="savings").forEach(ac=>console.log(ac.acno))
//q3 print balance of acno=1000
var balance=accounts.find(data=>data.acno==1000).balance
console.log(balance);


//q4 print all g-pay transaction details
var phonepaytransaction=accounts.map(data=>data.transactions).flat().filter(t=>t.method=="phone-pay");
console.log(phonepaytransaction); 

//print all transaction whose transaction amount > 500
var transaction=accounts.map(data=>data.transactions).flat().filter(t1=>t1.amount>500).forEach(t1=>console.log(t1))
// console.log(transaction);


//q5 print credit transcation's of 1002
var creditT=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
console.log(creditT);
//debit transaction of 1002
var debitT=accounts.find(data=>data.acno==1002).transactions
console.log(debitT);


//q6 print highest balance account details ......... reduce()
console.log("highest balance details");
var highest=accounts.reduce((b1,b2)=>b1.balance>b2.balance?b1:b2)
console.log(highest);

//q7 print transaction history of 1002
console.log("history");
// var transactionHistory=[]
// for(let t of creditT)
// {
//   transactionHistory.push(t)
// }
// for(let t of debitT)
// {
//   transactionHistory.push(t)
// }

//using key value pair
var transactionH={debitTran:debitT,creditTran:creditT}
console.log(transactionH);

//using spread operator
var transactionhh=[...creditT,...debitT]
console.log(transactionhh);