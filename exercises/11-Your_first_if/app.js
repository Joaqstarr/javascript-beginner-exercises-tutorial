let total = prompt('How many km are left to go?');

// Your code below:
let output = "";

if(total <= 50){
    output = "I'm parking. I'll see you right now";
}else if (total<= 100){
    output = "We'll be there in 5 minutes";
}else{
    output = "We still have a bit of driving left to go";
}


console.log(output);