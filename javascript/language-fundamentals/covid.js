var covid_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,8,5],
    [3,"kottayam",50000,500,45000,8,5],
    [4,"alappuzha",25000,150,24000,9,5],
    [5,"ernakulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"idukki",1000,50,9500,9,6],
    [8,"idukki",1000,50,10000,9,6],



]


//highest test +ve case district
var redcat=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
console.log(redcat[1]);

//highest frst dose vaccination rate
var safed=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2);
// maxfrst=safed[5];
var greed=covid_data.filter(d=>d[5]==safed[5]);
console.log(greed);

//district with lowest death cases


//sort district with +ve cases


//sort district based on 1st dose


//is there any states with +ve cases>60000



//print trissur details



