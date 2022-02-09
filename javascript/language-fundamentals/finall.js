var arr=[
    [10,50],
    [20,60],
    [1,2],
    [5,8],
    [30,40]
]

//flat is used to change the nested array into a single array
console.log(arr.flat());

//print all nmbrs >10
arr.flat().filter(num=>num>10).forEach(n=>console.log(n))
//print squares of all nmbrs
console.log("gg");
arr.flat().map(num=>num**2).forEach(n1=>console.log(n1))

//print total sum

//print highest number

var strings="hello hai"
//print vovels from this string
var vowels=["a","e","i","o","u","A","E","I","O","U"]
for(let char of strings)
{
    if(vowels.includes(char))
    {
        console.log(char);
    }
}
Array.from(strings).filter(char=>vowels.includes(char)).forEach(char=>console.log(char))
