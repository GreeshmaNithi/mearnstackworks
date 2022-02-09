var product=[
    [100,"oreo",40,50],
    [101,"goodady",30,50],
    [102,"hideandseak",50,0],
    [103,"mom's",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,50],


]

// print costly produc detail....reduce
console.log("kkk");
var costly=product.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2);
console.log(costly);
//print outof stok products......filter
console.log("lll");
var outstk=product.filter(p=>p[3]==0);
console.log(outstk);
//print oreo details.........find

var oreo=product.find(p=>p[1]=="oreo");
console.log(oreo);
//sort products based on available stok order by desc.......sort
var srt=product.sort((p1,p2)=>p1[3]-p2[3])
console.log(srt);
//print product details having maximum available stok.........reduce
var pr=product.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)
console.log(pr);
// console.log(product.map(item=>item[1]));
// //list of buiscuts available under 50rs
// console.log(product.filter(item=>item[2]<50));

// //prize of orio
// console.log(product.find(data=>data[1]=="oreo")[2]);

// //details of all oreo
// console.log(product.filter(data=>data[1]=="oreo"));

//some()
var isAvailable=product.some(p=>p[2]==10)
console.log(isAvailable);

//is there any product with available stock >100
var prd=product.some(p=>p[3]>100);
console.log(prd);

//is there any product available in range of 10 and 20
var rnge=product.some(p=>p[2]>=10&&p[2]<=20)
console.log(rnge);


//foreach() method
product.forEach(p=>console.log(p[1]))
