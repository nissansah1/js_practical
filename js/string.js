let sting = "nishant";
let sting1 = 'nishant';
// by using single and double colon and backtick you assign the string value
//templete literal- backtick is a special colon bcz it used to represent diff data type in modern form without using , for seperation eg

let numb_pen = 10;
let cost = 2000;

console.log("the cost of pen is ", numb_pen, "is", cost, "ruppes");
// traditional model - also it doesn,t change the datatype here - thats way output of diff type of data color is diff

console.log(`the cost of pen is ${numb_pen} is ${cost} ruppes`)
// modern model - here it doesn';t use colon and coma to separate and it change the all datatype into string
//this is callled sting interpolation --${numb_pen}
// you can asdlo perform operation eg
console.log(`the operation is perform and \n the it change it into string ${1 + 2 + 3 + 5}`)
//\n means next line - use within string only 
// \t means tab space - use to give tab space

/*lauguage have 
-inbuilt properties eg?:- .length ,
- function == methods called - block of code >>used to perform certain task 
*/

console.log(sting.length);
// length is used to give count of string

// remenber - String is an objec >>same like when we use obj.key we also use here sting.length

//to access character of string use string indices -sdtart from  0
console.log(sting[0]);
console.log(sting[1]);
console.log(sting[2]);
console.log(sting[3]);
console.log(sting[4]);
console.log(sting[5]);

let case1 = "niSHant";

console.log(case1.toUpperCase());
// it uded to convert all the obj value(sting)  into uppercase and it doesn,t cahnge the original value in declare var

console.log(case1.toLowerCase());
// it uded to convert all  the obj value(sting)  into lowercase and it doesn,t cahnge the original value in declare var

//bcz of string is immutable so ....
// to store the change value --store in new var

let trim1 = "   nissan   sah      ";
console.log(trim1.trim())
// it remove the start and end white space only , not in beetween

// sring have too many method -- just googel it if you forgot at the time .

let slicce = "abccd deffg";

console.log(slicce.slice(2, 4));
//console.log(Start, end)  -- select that part and remove all extra value --temporarily were start value is selected but upto end value is not inclueded
console.log(slicce.slice(2,));
// now start is declare but end no declare means upto last taak print karna hai


let first = "nissan ";
let last = "sah";

let full_name = first.concat(last);
// here we do concat means join the next string --  srting1_var.concat(string2_var)  >>pattern observer
console.log(full_name)
console.log(first + last + slicce);
// this way you can also concat the no. of string

console.log(first.replace("nis", "nabin"))
//replace means - replace the value of this string into another value - like update , but it channge temporly

console.log(first.charAt(3));
// it return the xharacter from that string obj index

let not_change = "value_not_change"
not_change[1] = "g";
console.log(not_change);
// bcz of string is immutable ......thriugh index change -cannot change the string original value

// to change the value of string 
let change = "taniya singh";
change = change.replace("t", "a");
// here you can change by replace the value and store in same var value .
console.log(change);

/* practice
prompt the user to enter their full name . generate a username for them based on the input. start username with @, followed by their full name and ending with the fukknuame length 
eg;- user_name="nissansah" then user_name should be @nissansah123
/*

let user_name = prompt("Enter your name");
console.log(`@${user_name}123`);
*/

