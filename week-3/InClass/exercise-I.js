
// // let unorederedLetters=[1, 5, 6, 7, 4, 3, 4, 35];
// // orderedLetters=unorederedLetters.map((unorederedLetters)=>{return unorederedLetters.sort()};

let newarr=[
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

  function newfunc(arr){

    return arr.filter((check)=> typeof check==='string').map((check)=> check.toUpperCase()+"!").map((check)=> check+"@");

  }
  console.log(newfunc(newarr));



//alternative 
  const arr=[
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];
 // const strArr = [];
//const output = arr

function secondfunc(arre){
return	arre.filter((element) => typeof element === 'string')
	.map((element) => element.toUpperCase())
	.map((element) => `${element}!`);}

console.log(secondfunc(arr));