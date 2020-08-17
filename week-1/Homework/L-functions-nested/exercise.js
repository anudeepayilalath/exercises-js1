// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";

function percentagefirst(a){
    const studentnumbers=Math.round(a);
    return "Percentage Students: " + studentnumbers+"%"; }

    console.log(percentagefirst(65.2084));

    function percentagesecond(a){
        const mentornumbers=Math.round(a);
        return "Percentage Mentors: " + mentornumbers+"%"; }
    
        console.log(percentagesecond(34.8158));
    
///////////////////////////////////////////////////////////////////////////////////////////


let a = 12;
let b = 4;
/**
 *  Count procent of first number(a) from summ of two number(a+b) 
 */
function countProcents(a, b) {
  let procent = Math.round(a/(a+b)*100);
  
  return procent;
}

/**
 * Generate message and call countProcents from inside.
 * 
 */
function getMessage(text, a, b) {
  let procent = countProcents(a, b);
  let message = text + procent + '%';
  return message;
}
let text1 = getMessage('Percentage students:', a, b);
console.log(text1);
let text2 = getMessage('Percentage mentors:', b, a);
console.log(text2);

       



 
