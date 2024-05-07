function sing(){
    return LetItBe(4)+ "there will be an answer, "+ LetItBe(5)+"whisper words of wisdom, "+ "let it be";
}


function LetItBe(amt){
    let out = "";
    for(let i = 0; i < amt; i++){
        out += "let it be, ";
    }
    return out;
}

//Your code above ^^^

console.log(sing());