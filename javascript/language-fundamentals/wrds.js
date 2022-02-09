var text="hello hai hello hai"
//step1: split the string into words
var words=text.split(" ")
console.log(words);
// var wordCount={
//     hello:2,
//     hai:2
// }
// console.log(wordCount);

//step2:create an empty object
var wordCount={}
//iteration start
// for(let word of words)
// {
//     if(word in wordCount)
//     {
//         wordCount[word]+=1
//     }
//     else
//     {
//         wordCount[word]=1
//     }
// }
// console.log(wordCount);

text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount);

// var pattern="ABABBC"
// find the frst recursive character
