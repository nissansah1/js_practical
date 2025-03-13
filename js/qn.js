// print all evevn number from 0 to 100
let even_num = 10;
let arr = [];
let j = 0
for (let i = 0; i <= even_num; i++) {
    if (i % 2 == 0) {
        // console.log("this is prime numeber", i);
        arr[j] = i;
        j++;
        // here it store in a array with index  bcz it is in sequence , no conditional
        // but in i there is an conditional so , arr[i] is not valid
        //also j is increase when i conditional is meeted
    }
}
console.log(arr.toString())
//convert arr value into string valur so , without loop it print




//create a game where you start with any random game number.Ask the user to keep guessing the game number until hte user enter correct number
let gameNum = 25;
let userNum;
// initisalization of while loop

while (gameNum !== userNum) {
    userNum = Number(prompt("Again, guess the  correct number = "));
    //no updation here ....means this task repeat till conditions is not match
}
console.log("congratulation , you give correct number");

