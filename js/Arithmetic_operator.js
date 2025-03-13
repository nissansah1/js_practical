let val_A = 25;
let val_B = 5;

//Arithmetic operation
let Add = val_A + val_B;        //add
let Sub = val_A - val_B;        //ssubtract
let Mul = val_A * val_B;        //multiply
let Div = val_A / val_B;        //divide
let Mod = val_A % val_B;        //module

//display arithmetic operation in indirect way 
console.log("Add = " + Add);
console.log("Sub = " + Sub);
console.log("Mul = " + Mul);
console.log("Div = " + Div);
console.log("mod = " + Mod);

//display arithmetic operation in direct way 
console.log("val_A + val_B = ", val_A + val_B + " Addeed");        //for operation in console  frist seterated by , before text  then perform task directly in >                                                           console and then you can use +  sign to add some text

//console.log('text_added' , action + perform + 'text_added');      //pattern observer
console.log("val_A - val_B = ", val_A - val_B, "subtract");        //or you can common used of , only to seperate stering , number etc 
console.log('val_A *  val_B = ', (val_A * val_B));       //or you can use ccoma with bracket



let a = 25;
let b = 5;

console.log("a = ", (a), "and  b = ", (b));

//perrform operation by seperate static with dynamic operation by using ,
console.log("a + b= ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("modules= ", a % b);        //modules operation
console.log("exponential = ", a ** b);     //exponential operation means square 



//console.log("static" , dyna + mic);       //pattern observer 

//perform operation by seperate static with dyanmic opeation by usnig , and then dynamic operation in ()
console.log("a + b = ", (a + b));
console.log("a - b = ", (a - b));
console.log("a / b = ", (a / b));
console.log("a * b = ", (a * b));
//console.log("static" , (dyna + mic));       //pattern observer

//uneary operator
//increment operator
console.log(a++);       //post increment-- baad_me value change
console.log(++a);       //pre increment -- pehile value cahnge 

//decrement operator
console.log(--b);       //pre decrement 
console.log(b++);       //post decrement


//assignment operator
// eg:=     =     +=       -=        %=       **=       /=

a += 5;     //it means a = a + 5
console.log("a += 5 >>  ", a);

a -= 5;     //it means a = a - 5
console.log("a -= 5 >>  ", a);

a *= 5;     //it means a = a * 5
console.log("a *= 5 >>  ", a);

b **= 5;    // it means a = a ** 5
console.log("b **= 5 >>  ", b);

a /= 5;     // it means a = a / 5
console.log("a /= 5 >>  ", a);

console.clear();


//comparision operator  -- check single condition either "true" or  "false"
/*eg: -
    equalto     ==      //check same datatype 
    ewual to and type    ===        check diff datatype with same value 
    not equal to    !=
    not equal to and type    !==
*/
let c = "25";
let greater_than = (a > b);
let less_than = (a < b);
console.log("equal_to = ", (a == c));   //don,t check daatype but same value can give  eg: 25 == "25"  >> true  --but technically it,ve to false , so that === introduce

console.log("equal_to_and _datatype = ", (a === c));    //check diff datatype with same value eg 25 === "25"    >> false
console.log("not_equal_to = ", (a != b));
console.log("not equal to and datatype = ", (a !== b));
console.log("greater_than = ", (greater_than));
console.log("less_than = ", (less_than));
console.log("greater than equal to = ", (a >= b));
console.log("less than equal to = ", (a <= b));


console.clear();

//logical operator        //compare btwn two/derived with certain condition / comparison  except !(not) and check either "true" or "false"
/* eg
 logical AND    &&      --only, both condition must be true 
 logical or     ||      --at least only one condition must be true
 logical not    !       --opposite of condition 
*/

// let OR = (a < b) || (5 - 3);
// let AND = (3 + 4) && (101 - 3);

//note :- arithematic operation is not work  -- it give calculation number , that way ccompare operator is used two check two condition

let AND1 = (greater_than) && (less_than);
let OR1 = (greater_than) || (less_than);
let NOT = !(a > b);          //opposite of condition

console.log("And - both condition satisfied = ", (AND1));
console.log("OR - atleast one condition satisfied = ", (OR1));
console.log("not - opposite of condition = ", (NOT))








// console.clear();