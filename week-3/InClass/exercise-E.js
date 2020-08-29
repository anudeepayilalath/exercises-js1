//  let years=[1964, 2008, 1999, 2005, 1978, 1985, 1919];
//  function yearly(newdsd){

//     return 2020-newdsd;
// }



// let newarr=[];
// for(let i=0; i<years.length; i++){
//     newarr.push(yearly(years[i]))
// }


// console.log(yearly(1998));

let numbs=[1, 2, 3, 4];

let first=numbs.map((result)=> {return result+1});
console.log(first);
console.log(numbs);

let second=numbs.forEach((result)=>{ return result+1});
console.log(second);
console.log(numbs);


//  let second=numbs.forEach((result, sicx)=>{ numbs[sicx] = result+1});
//  console.log(numbs);
// let numbs2 = [];
// let second=numbs.forEach((result, idx)=>{ numbs2.push(result+1)});
// console.log(second);


let names=[1, 3, 4, 7];   

function happy(arre){
    return arre*2;
}
let newarr=[];
 for(i=0; i<names.length; i++){
     const good=happy(names[i])
     newarr.push(good)

 }

 console.log(happy(names));