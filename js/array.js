/*
arrrar is the collection of similar type of value .
- lineaar way to store similar datatyoe value
arr name with [i] will give you accenss to that pat=rticular student

remember, in javascript, you can give diff datatype in same array - it work and store diff datatype in same array
*/

// array is a special type of onject
let arr = [1, 2, 3, 4];
// paettern observer - var_name_array = [value];

console.log(arr);

let heroes = ["ironman", "thor", "antman", "hawakaye"];
console.log(heroes);

console.log(typeof heroes);
// typeof is used to what type of datatype is this

//array indecies - used to access through index eg:- arr[2], arr[5] eg:-
console.log(heroes[2]); //you get value of index two of heroes obj array

//always remember it store in index upto (n-1) from it actual n value because array always start from 0

//always remember , jaab aap  out of boundary indices <array ka > access karna chahoge, to terminal/console(browser) pe undefined aayega

/*loops - wee can iterable in (string, onject , array ) .so we can do loop in these datatype

These data types are a collection of index:value pairs.". so you can access data of particular index*/

// remember always kniw the length of an these data type , - so, you know where to stop (forloop condition)

/*mostly normal loop pattern is liike this one 
for(let idx=0; idx<arr.length; idx++ ){
        //do task related iterated/loop
}
*/


//remember i=o ho toh , condition pe < yeh use karo , naaki <= yeh ....bcz array ka value --index upto (n-1) tak he hota hai
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);        //print all the arr value 
}

//to print /perform some task, to all the index of array then ,we can also use for of | for in loop
for (let i of heroes) {
    console.log(i);                  //yeha pe hum direct index dalke ,without arr[] , aaise diye ,hum har index ka value ,nikal sakte hai 
}

/* for (let i of <array_var_name>){             //pattern observer
        //perform task for all index sequencly
}
eg:-*/
let cities = ["mumbai", "delhi", "gujarat", "UP", "MP"];

for (let i of cities) {
    console.log(i.toUpperCase());   //here , it perform task , to all the index  
}



let cost_of_foods = [250, 645, 300, 900, 50];
//remenber , in for of loop , valaue of array is store in i  , - mtlb rather than show index 0,1 , it directly assign value
for (let i of cost_of_foods) {
    console.log(i);                  // it print value , not index i=0,1 --mease direct value asign 
}


/*
Let's Practice 
Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] 
Find the average marks of the entire class.
*/

let students = [85, 97, 44, 37, 76, 60];
let sum = 0; //yaad rahe jaab bhi array ke liye koi var banarahe ho, to value declare karo 
for (let i of students) {
    sum = sum + i;
}
let avg = (sum / (students.length));
console.log("avg value of students mark is ", avg);



/* 
Let's Practice 
Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] 
All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
*/

let item = [250, 645, 350, 900, 50];
for (let i = 0; i < item.length; i++) {
    let discount = item[i] - (item[i] * 0.1);       //loop repeat , value reset bcz it initialize inside loop 
    item[i] = discount;                             //after that it re-assign new vlaue ,to same index of the same array 
}
for (let i of item) {                                // now , using for llop to display the value 
    console.log(i);
}


// another method to solve the same rpoble using <for-of > loop 
let items = [250, 645, 350, 900, 50];
let i = 0;                          //initialize the value mannually in for-of loop
for (let idx of items) {            //here is the condition --mtlb last taak chalega -- yehi condition hai 
    let offers = idx - (idx * 0.1);
    items[i] = offers;
    i++;                           //update the initialize value 
}
// directly print value by
console.log(items);               // it print all the value inside array without iterate loop
