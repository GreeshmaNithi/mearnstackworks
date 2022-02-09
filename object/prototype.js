// var baleno = {
//     manifacturer: "nexa",
//     price: 10,
//     varients: ["manuel"],
//     color: ["red", "blue"]
// }

// var glanza = {
//     manifacturer: "toyota",
//     price: 12,

// }
// //prototype inheritance 
// glanza.__proto__=baleno




// console.log(glanza.manifacturer);
// console.log(glanza.varients);


//example2

// var language=
// {
//     name:"javascript",
//     type:"interpreted",
//     version:"ES10"
// }
// var framework=
// {
//     name:"express",

// }

// framework.__proto__=language
// console.log(framework.version);
// console.log(framework.name);
// console.log(framework.type);

//example3

var samsungm52=
{
    brand:"samsung",
    price:24000,
    band:"4g",
    display:"amold",
    processor:"snapdragon",
    getPrice()
    {
        return this.price
    }
}

var samsungA52={
    price:350000,
    band:"5g"
}
samsungA52.__proto__=samsungm52

samsungA52.__proto__=samsungm52
console.log(samsungA52.getPrice());
console.log(samsungm52.getPrice());

