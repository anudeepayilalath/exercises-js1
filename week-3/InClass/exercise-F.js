 let years=[ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
// function calc(ano){
//     return "Born in" {i} "can drive or Born in "{i} " can drive in "{ano} "years";
// let result=[];
//     for(i=0; i<years.length; i++){
//     let answer =result.push(2020-i)>17;
//     }
// }
function newfunc(year){
    const age=17-(2020-year);
    if((2020-year)>=17){
        return "Born in "+year+" can drive";
    }
    else{return "Born in "+year+" can drive in "+age+"years";}
}

result=years.map(newfunc);
console.log(result);