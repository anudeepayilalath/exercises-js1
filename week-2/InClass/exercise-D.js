function exercise(mymood){
    if(mymood ==="happy"){
        return "Good job you are doing great";
        
    }
    else if(mymood ==="sad"){
        return "Every cloud has a silver lining"; 
    }

    else if(typeof mymood ==="number"){
        return "Beep beep boop";
    }

    else  {
        return "I'm sorry, I'm still learning about feelings!";
    }
   
}
console.log(exercise(5));

