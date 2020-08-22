function exponential(number) {
  return number * number;
}
let number=6;
// function isEven(number) {
//   return number % 2 === 0;
// }
// console.log(exponential(2));

while(number<=18){
  console.log("the exponential of "+number+" is "+exponential(number));
  number =number + 2
}