//queery selector used  - for manupulate and perform action 
/*
* getelementbyid - access through id - only one element access
document.getelementbyid("id_name")  -now you get access to that id {now do perform through () or .object }

* queryselector - accessby everythings which come first only (modern_one) eg:- document.querySelector("tag / #id / .class");
-tag access by no_symbol
- id access by # symbol
- class access by . symbol

*  queryselectorall - accessby everythings (modern_one) eg:- document.querySelectorAll("tag / #id /  .class");
-tag access by no_symbol
- id access by # symbol
- class access by . symbol

* getelementbyclassname - access through class -common element

*/

//access to function/manupulate through id
console.log(
    document.getElementById("id-button").click
);
// both are old model 

//access to function/manupulate through class
console.log(
    document.getElementsByClassName('class-button').click
);
//new model -access first find one only
document.querySelector("button");  //tag access

document.querySelector("#id-button");  //id access

document.querySelector(".button");  //class access


//new model -access all 
document.querySelectorAll("button");  //tag access

document.querySelectorAll("#id-button");  //id access

document.querySelectorAll(".button");  //class access

