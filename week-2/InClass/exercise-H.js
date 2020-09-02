function exponential(number) {
  return number * number;
}
// for add number
// function isEven(number) {
//   return number % 2 !== 0;
// }


function isEven(number) {
  return number % 2 === 0;
}
let i=6;
for(let i=6; i<20;  i=i+1){
  if (isEven(i)){
  console.log("the exponential of "+i+"is "+exponential(i));
  
}}
//isEven(i);


// for(let number=6; number<=18; number =number + 2){
//   console.log("the exponential of "+number+" is "+exponential(number));
  
// }
