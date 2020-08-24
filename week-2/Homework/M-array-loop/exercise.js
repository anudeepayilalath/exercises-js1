/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


// const daysOfWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// function weeks(daysOfWeek){
//   daysOfWeek.forEach(value) => {
//     if (value.startsWith('T'))
//     console.log(value);}
// }




// _____________________________________________________________________________________________________________
// function tFun(arr) {
//   arr.forEach(val) 
// }

// console.log(tFun(daysOfWeek));


////////////////////////////////////////
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// for (let i=0; i < daysOfWeek.length; i++) {
//   if (daysOfWeek[i].charAt(0) === "T") {
//     console.log(daysOfWeek[i]);
//   }
// }

for (let i=0; i < daysOfWeek.length; i++) {
  // daysOfWeek[i] => "Monday"[0] => "M" : daysOfWeek[i][0] => "M"
  if (daysOfWeek[i][0] === "T") {
    console.log(daysOfWeek[i]);
  }
}