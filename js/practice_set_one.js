/*      //using without dom access 
let var_store = prompt("enter a number = ");    //input value store in "var_store" variable
// prompt is used to get  input from user in alert section

let divider = prompt("enter a divider number");


if ((var_store) % (divider) === 0) {
    console.log("yes " + var_store + " number is divided by" + divider);
} else {
    console.log("no ," + var_store + " number is not divided by ", divider); 25
}
*/

//using by dom access  - practice_set_one
const button_click = document.getElementById("button_click");   //here access by dom and "var_name" is key to access 
button_click.onclick = function () {        //here "var_key" is used to perform some function - when onclick buttom is triggered
    let var_store = prompt("enter a number = ");    //input value store in "var_store" variable
    let divider = prompt("enter a divider number");

    if ((var_store) % (divider) === 0) {
        console.log("yes " + var_store + " number is divided by", divider);
    } else {
        console.log("no ," + var_store + " number is not divided by ", divider);       //using comma insted of "+" - benifit , it automatic give space between (permut of static and dynamic comtent)
    }
};


//practice_set_two
let marks = 50;

console.log("practice_set_two ")
if ((marks >= 90) && (marks <= 100)) {
    console.log("You scored grade A with a score of", marks);
} else if ((marks >= 70) && (marks <= 89)) {
    console.log("You scored grade B with a score of", marks);
} else if ((marks >= 60) && (marks <= 69)) {
    console.log("You scored grade C with a score of", marks);
} else if ((marks >= 50) && (marks <= 59)) {
    console.log("You scored grade D  with a score of", marks);
} else {
    console.log("You scored grade F with a score of", marks);
}