products = [
    {
      pid: 100,
      p_name: "samsungA52",
      band: "5g",
      price: 30000,
      display: "amoled",
    },
    {
      pid: 101,
      p_name: "samsungf41",
      band: "4g",
      price: 15000,
      display: "amoled",
    },
    {
      pid: 102,
      p_name: "mi10promax",
      band: "4g",
      price: 19000,
      display: "amoled",
    },
    { pid: 103, p_name: "mi11lite", band: "5g", price: 22000, display: "led" },
    {
      pid: 104,
      p_name: "iphone12pro",
      band: "5g",
      price: 80000,
      display: "amoled",
    },
    { pid: 105, p_name: "realme", band: "4g", price: 12000, display: "led" },
  ];
  
  
  
  
  // # print product names only
  console.log("names only");
    products.forEach(p=>console.log(p.p_name))
  
  // # print all mobile details whose display="amoled"
  console.log("display=amoled");
  products.filter(p=>p.display=="amoled").forEach(p=>console.log(p.p_name))
  
  // # print 5g moboile names
  console.log("5g");
  products.filter(p=>p.band=="5g").forEach(p=>console.log(p.p_name))
  
  // # filter mobiles based on price
  console.log("price");
  products.sort((p1,p2)=>p2.price-p1.price).forEach(p=>console.log(p))
  
  // # print costly mobile
  console.log("costly");
  var cost=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
console.log(cost);  
  // # print low cost mobile
  console.log("cheap");
  var lowcost=products.reduce((p1,p2)=>p1.price<p2.price?p1:p2)
  console.log(lowcost);
  