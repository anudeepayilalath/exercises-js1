// Declare your function here
function createLongGreeting(name, age){
const first="My name is ";
const last=" and I am "
    return first+name+last+age+" years old";
}
const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
