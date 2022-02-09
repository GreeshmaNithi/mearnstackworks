var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},

]

//{thrissur:32,ekm:32,ktm:30,idk:20

var wout={}
for(let record of data)   //record=object....record={districtname:"thrissur",weather:32}
{
    let districtname=record["districtname"]    // extract districtname and weather
    let crnt=record["weather"]
    if(districtname in wout)
    {
        let oldtemp=wout[districtname]; 
        if(crnt>oldtemp)
        {
            wout[districtname]=crnt;
        }
    }
    else{
        wout[districtname]=crnt;
    }
}
console.log(wout);
console.log(Object.entries(wout).sort((r1,r2)=>r2[1]-r1[1]));

// { thrissur: 32, ekm: 32, ktm: 30, idk: 20 }
// var out=[
//     ["thrissur",32],
//     ["ekm",32],
//     ["ktm",30],
//     ["idk",20]
// ]
// out.sort((r1,r2)=>r2[1]-r1[1])
// console.log(out);








