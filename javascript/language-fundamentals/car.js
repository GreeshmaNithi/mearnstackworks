var baleno={
    name:"boleno",
    model:"nexa",
    manifacture:"maruti",
    price:"10lac"
}

//print manifacture
console.log(baleno.manifacture);
//if there is a model then print it
if("model" in baleno)
{
    console.log(baleno.model);
}
//add varient into the baleno
baleno.varient=["manuel","fully automatic"]
console.log(baleno);
//add another varient
baleno.varient.push("aaaa")
console.log(baleno.varient);
//add color
baleno.color=["red"]
console.log(baleno);
//add anoter calor
baleno.color.push("black")
console.log(baleno.color);