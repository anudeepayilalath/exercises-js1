function greetingFCN(inputName, greetingMsg){
    
    const phrase=greetingMsg+inputName;
const namelength=inputName.length;
   const greeting=phrase+" and my name is "+namelength+" character long";
    return greeting;
}

const inputName="Anudeep";
const greetingMsg="Hai my name is ";
console.log(greetingFCN(inputName, greetingMsg));

