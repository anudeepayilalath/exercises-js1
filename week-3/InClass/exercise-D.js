function abracaFunction(newfunction) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = newfunction(abracaArray);
  
   
  
    return abracaOutput;
  }
  function newfunction(arr){
      let answer=arr.map((change)=> change.toUpperCase()).sort();
      return answer;
  }
  
  console.log(abracaFunction(newfunction));