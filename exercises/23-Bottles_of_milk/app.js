// Your code here:
function Milk(amt){
    for(let i = amt; i > 2; i--){
        console.log(i+" bottles of milk on the wall, "+i+" bottles of milk. Take one down and pass it around, "+(i-1)+" bottles of milk on the wall.\n")
    }
    console.log("2 bottles of milk on the wall, 2 bottles of milk. Take one down and pass it around, 1 bottle of milk on the wall.\n")
    console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.\n")
    console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, "+amt+" bottles of milk on the wall.\n")
}
Milk(99);