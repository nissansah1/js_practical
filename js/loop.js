console.log("future group");
console.log("future group");
console.log("future group");
console.log("future group");
console.log("future group");        // this is old traditional model -not applicable for long repeaded - for that loop is introduce

// console.clear();

/*  syntax
       1         2          3                         1 >> 2 first initialize then check condition if filfull then do task -check(condition true? or false?)
   initilaze; condition; updation                     2>>3 after task completed update init value
for (let i = x;  i <= x;   i++) {                     3>>1 now re-assing the value with update value and vice versea
    //do task
}
*/

/*
loop are four type 
for loop 
while loop
do-while loop
for each loop (for in and for of "loop")
*/

for (let i = 1; i <= 5; i++) {      //for loop is uesd to loop the task with certain updation till underconsition is nit meet 
    console.log("future group");
}


//practice - calculate sum of n numbers
let number = 50;
let sum = 0;

for (let i = 0; i <= 50; i++) {
    sum += i;        // sum = sum +  i;        again ,again sum the value and value is update in sum  
}
console.log("sum of number is ", sum);


//display loop index 
for (let i = 0; i <= 10; i++) {
    console.log("index loop =", i);     //loop index print till condition not meet 
}
console.log(i + 1);        //get error bcz
//remember , var used for gollobally -means access without or within curly bracket
// where  let , used for locally means access within curly bracket or not having any curly bracket -that time only access , to remove error used var in within curly bracket eg:
let mul = 1;
for (var i = 1; i < 5; i++) {
    mul *= i
}
console.log("multiply", mul);

// note:-  in loop - it take storage and store value (again ang again) to perform specific task - after loop complete it release the storage of loop

// console.clear();



//while loop - start

/*      - pattern observer 
i = X;
while (condition){
    //do task 
    
updation  i++
    }
*/

let iterate = 1;        //initialization
while (iterate <= 5) {          //consition
    console.log("executed by while loop", iterate);

    iterate++;      //updation 
}
// same as for loop - just little thing different (search in chatgpt )

/*
 do-while loop
 - First, perform the initial task, then check the loop condition.
 - At least one iteration is executed even if the condition is met.
 
 i = X;
 do {
     // Perform the first task at least once

      
     // Update the variable
     i++;
 } while (condition) ;
 */

console.clear();

let i_do = 10;      //initialization (1)
do {                //do -at least one task (2)
    console.log("at least one task is perform ,even condtion is filfulled ");
    i_do++;    //task (3)
}
while (i_do <= 1);      //updation (4)

// 1>>2>>3      3>>4  //check consition if true then stop , otherwise continue and vice versa
//in do-while loop use ; at last


/*
for each loop -=> for of loop       --used for strings and array value 
 - in, for-of loop = no need to initialization , condition and updation >>it auto detect from start and continue till end 

 */
let for_of_loop = "Nishant kumar sah";
for (let i of for_of_loop) {        //start from i=0 , auto update by 1 and condition till ended
    console.log("i=", i);
}

/* for -of loop     --pattern observer 
for (let i of var_name){
    //do task 
}
*/

let count_value = "Janeth_my_assist";
let count = 0;
for (let i of count_value) {
    count++
}
console.log("print count value = ", count);

//remember , dont declare value in loop bcz it repeated re-declare from start , in repeated loop


/*
for in loop -=> for in loop       --used for objects and arrays

 - in, for-in loop = no need to initialization , condition and updation >>it auto detect from start and continue till end 
*/
console.clear();

// student object created
let student = {
    name: "nishant sah ",
    age: 20,
    cgpa: 8.0,
    ispass: true
}

// to perform action in all onb.key we use for-in - it only work in key only 
for (let key in student) {
    console.log(key);
}

//now pass key into obj means visualize like obj.key means it return it key value 
for (let key in student) {
    console.log(key, " =", student[key]);
}


//learn karna baaki hai 
//qn- print all even number from 0 -100
// let n = 100;
// console.log("1");
// console.log("2")

// for (let i = 2; i <= 100; i++) {
//     if ((i % 2 !== 0) & (i % 3 !== 0)) {
//         console.log(i, "number is prime number ");
//     }
// }


// print all evevn number from 0 to 100
let even_num = 10;
let arr = [];
let j = 0
for (let i = 0; i <= even_num; i++) {
    if (i % 2 == 0) {
        // console.log("this is prime numeber", i);
        arr[j] = i;
        j++;
        // here it store in a array with index j bcz it is in sequence , no conditional

        // but in i there is an conditional so , arr[i] is not valid

        //also j is increase when i conditional is meeted
    }
}
console.log(arr.toString())


//create a game where you start with any random game number.Ask the user to keep guessing the game number until hte user enter correct number

/*
A for loop is generally used when the number of iterations is known beforehand.

In this case, we don’t know how many times the user will guess, so a for loop is not the best choice.

let game_num = 25;

let user_input = 0;
for (let i = 0; i == (user_input == game_num); i++) {

  user_input = prompt("guess the the number = ");
}
console.log("congratualtion , you have givven right numberr !!!")
*/

/* this is the right one code 
let gameNum = 25;
let userNum;
// initisalization of while loop

while (gameNum !== userNum) {
    userNum = Number(prompt("Again, guess the  correct number = "));
    //no updation here ....means this task repeat till conditions is not match
}
console.log("congratulation , you give correct number");
*/
