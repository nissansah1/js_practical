//conditional statement 
console.log("consditional_statement ");
console.log(" ");
let Age = 18

if (Age > 18) {
    console.log("you have opportunity to give vote");
}
else {
    console.log("you are not matured");
}

Marks = 40;

if (Marks >= 40) {
    console.log("you have passed ");
} else {              //in else means nocondition -by default apply if no condition match 
    console.log("you failed ");
}


/*   if - else statement    //shorthand of one condition applied and satisfied then use this one  
if (condition) {            //condition true -execute, otherwise
    //do this task
}
else {          //execute this - bcz condition false 
    //otherwise ,do this task
}
*/          //pattern observer



//you can use multiple time if statement  -- if condition execute multiple time if condition meet
console.log("");

let percentage = 45;

if (percentage < 40) {
    console.log("you failed!");
}
if (percentage >= 40) {             //1st condition meet - execute
    console.log("you have passed the exam ");
}
if ((percentage > 40) && (percentage < 60)) {      //2nd condition meet - execute
    console.log("you got C grade");
}
if ((percentage >= 60) && (percentage < 80)) {      //in if condition -again match then again it executed
    console.log(" you got B grade ");
}
if ((percentage >= 80) && (percentage <= 100)) {
    console.log("you got A grade ");
}


// if condition match -  internal variable  value change 
let police_verify = "amitaah don"

if (police_verify === "amitaah don") {
    police_verify = "police catch the don , congrats "      //here ,condition match so it change the condition value 
}
console.log(police_verify);


let mode = "light";
let color;

if (mode === "light") {
    color = "light";
}
if (mode === "dark") {
    color = "black";
}

console.log("Screen Colour = ", color);

// if - else is a block chain ko rules creating ...alc to certain condition meet


let value = 5;

if (value % 2 === (0)) {
    console.log("this is even number ");
} else {
    console.log("this is odd number")
}


/*   if - else-if - else statement    //shorthand of  multiple condition option but only one applied and satisfied then use this one */

let age = 24;       //must use sequence order condition bcz -one output comes , fifo princple is used here - mathc and executed

if (age < 18) {
    console.log("you are child");
}
else if (age < 32) {
    console.log("you are young ");
}
else if (age < 45) {
    console.log("you are man ");
}
else if (age < 60) {
    console.log("you are parent");
}
else {       //in else means nocondition -by default apply if no condition match 
    console.log("you are old");
}

/*   if - else if  - else       //pattern observer 
if (condition) {         //if true , not then >>2 check
    //do task 
}
else if (condition) {   //if true , not then >>3 check
    // do task 
}
else if (condition) {   //if true , not then >> apply else as by default
    //do task 
}
else {
    //do by default task without any condition
}
*/
console.clear();


//ternary operator
// condition ? if_true-output : by_default-output;

let Nissan = 24;
let output = (Nissan >= 24 ? "you are young, hello " + Nissan : "don't know the age ");     //better to use + sign btwn static and dynamic task inside console.log
console.log(output);




//switch statement      //match condition >> then do task of that selected matching condition
//in company - switch is mostly not used in programming

let Fruits = "Apple";
switch (Fruits) {
    case "mango":       //match the switch var value with case , if tyes then execute ,no then continue
        console.log("mango is sweet fruit");
        break;      //break used to broke the sequence checking and exit it !!!
    case "graph":
        console.log("graph is small and sweet fruit");
        break;
    case "apple":
        console.log("an apple a day, keep doctor away !!!");
        break;
    default:        //if no one case match then by default execute this one 
        console.log("not match ");
}
/*
switch (var_name){
case 1:
    //do task;
    break;
case 2:
    //do task
    break;
default:
    //by default , do this task
}
*/          //pattern observer