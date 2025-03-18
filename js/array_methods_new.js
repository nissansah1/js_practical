let mmarvelHeros = ["thor", "spiderman", "ironman"];
let dcHeros = ["superheros", "batman"];
let indianHeros = ["shaktimaan", "krish"];

// remember array_method start with small leter - camalcase

/* array methods
 Array Methods in JavaScript (Hinglish me) 

1.  push()  - Array ke end me ek ya zyada elements add karta hai.  

2.  pop()  - Array ke end se ek element remove karta hai.  

3.  shift()  - Array ke start se ek element remove karta hai.  

4.  unshift()  - Array ke start me ek ya zyada elements add karta hai.  

5.  concat()  - Do ya zyada arrays ko mila kar ek nayi array banata hai.  

6.  join()  - Array ke elements ko string me convert karke join karta hai 
(default comma se).  

7.  slice()  - Array ke specific part ko extract karta hai aur nayi array return karta hai.  

8.  splice()  - Array me add, remove ya replace karne ke liye use hota hai.  

9.  reverse()  - Array ke elements ko ulta karta hai.  

10.  sort()  - Array ke elements ko sort karta hai (alphabetically by default).  

11.  indexOf()  - Array me kisi element ka first occurrence index return karta hai.  

12.  lastIndexOf()  - Array me kisi element ka last occurrence index return karta hai.  


13.  includes()  - Check karta hai ki element array me present hai ya nahi 
(true/false return karta hai).  

14.  find()  - Pehle element ko return karta hai jo condition ko match kare.  

15.  findIndex()  - Pehle element ka index return karta hai jo condition ko match kare.  

16.  filter()  - Un elements ki nayi array banata hai jo condition ko match kare.  

17.  map()  - Array ke har element par function apply karta hai aur nayi array return karta hai.  

18.  reduce()  - Array ke elements ko reduce karke ek single value banata hai.  


19.  reduceRight()  - Reduce karta hai right se left direction me.  

20.  every()  - Check karta hai ki sabhi elements condition ko match karte hain ya nahi.  

21.  some()  - Check karta hai ki koi ek element bhi condition ko match karta hai ya nahi.  

22.  forEach()  - Har element par function ko call karta hai (kuch return nahi karta).  

23.  from()  - Array-like ya iterable objects ko array me convert karta hai.  

24.  isArray()  - Check karta hai ki given object array hai ya nahi (true/false).  

25.  fill()  - Array ke har element ko ek fixed value se fill karta hai.  

26.  flat()  - Nested arrays ko flat karne ke liye use hota hai.  

27.  flatMap()  - Map karta hai aur result ko flat karta hai.  

28.  copyWithin()  - Array ke elements ko kisi aur position par copy karta hai.  

29.  toString()  - Array ko string me convert karta hai.  

30.  values()  - Array ke element values ko iterator object me convert karta hai.  

*/

/*
//   yeh baale method new array banata hai 
concat      
slice
filter
map
flat
flatMap
from() 
//  aaur baaki array -- existing array per he change karta hai 
*/

//mostly
// remomber method ko     arr_varName.methodName(pass_value);           pattern observer
// remomber method ko     arr_varName.methodName();     noValue           pattern observer

// remomber method ko     let variable_name = arr_varName.methodName(pass_value);   you can store in another variable         pattern observer

let arr = [1, 2, 3, 4, 5, 7, 6, 8];

//<change in original array >
arr.push(4); //1 . push ()  - end me se element add karta hai
console.log("push - element ko last se add karta hai =  ", arr.push(5));

//push pe - multiple elements ko end me add kar sakte hai
arr.push(10, 9, 8);
console.log(
  "push - multiple-element ko last se add karta hai =  ",
  arr.push(5)
);

//<change in original array >
arr.pop(); //end se ek element ko remove karta hai
console.log("pop - ek element ko last se remove karta hai =  ", arr.pop());

//<change in original array >
arr.shift(); //element ko start[aage] se - ek element ko remove karta hai
console.log("shift - ek element ko start se remove karta hai =  ", arr.shift());

//<change in original array >
arr.unshift(-1); //start se ek element ko add karna
console.log("unshift - ek element ko start se add karta hai =", arr.unshift(0));

//unshift - multiple elements start me add kar sakte hai
arr.unshift(20, 21, 22);
console.log(
  "unshift - multiple element ko start se add karta hai =",
  arr.unshift(0)
);

let full = ["nishant", "kumar"];
let name = ["sah"];

//<create new array >
//let var_StoreName = first_var/Arr . concat(second_var/Arr);
let full_name = full.concat(name); //conccat - doo variable like string_dataType ya array ko join karta hai
console.log(
  "concat - ek var/arr_var ko dusre  var/arr_var se join karta hai =",
  full_name
);

//<change in original array >
let joined = arr.join(); //join - yeh array ko string pe conveert kar deta hai
console.log("join - array ko string pe convert  karta hai =", joined);

let addValue_inJoin = arr.join("*"); //join - yeh array ko string pe conveert kar deta hai aaur parameterValue_pass karne pe har array ke element ke --bech pe add ho jata hai
console.log(
  "join_parameterPass - array ke ahr element ke -  bich pe para_value add karta  hai =",
  addValue_inJoin
);

//<create new array >
// let varName = arrVarName.slice(i,i-n);           pattern observer
let sliced = arr.slice(1, 4); // slice - yeh array ka (i,i-n) means [i to (i-n)] kak ka vale ko copy karke dega --where last value is not included
//also agar main (i-n) mention na karu to - bydefault last taak consider karega (i.e., slice(i)).
console.log("slice - ek element mannually part ko copy karta hai  =", sliced);

/* 
// splice(): change_original_array.splice(add,remove,update);      pattern observer 
//                              .splice(startIdx, delIdx, newEle)  eg.splice( 2,0,(1,2,3)) 
   Example: splice(2, 0, 1, 2, 3)  
   - startIdx = 2      (index 2 se operation start hoga)  
   - delCount = 0      (kitna element delete nahi hoga)  
   - newEle = (1, 2, 3)  (index 2 se naye elements insert honge)  
   Agar element add nahi karna to add part chhod sakte hain/ sirf delete karna ho toh  (eg: splice(2, 0)) 

*/

//let Arr_name = arr_name.splice(startIdx, delIdx, newEle)        pattern observer
let splice = arr.splice(1, 1, 9); //// 8. splice() - Array me element add/remove/update karta hai
console.log(
  "splice - array element ko add, remove from particular index  =",
  sliced
);

//delete element using splice
let deleted = arr.splice(2, 1); // 2 index se 1 element delete karo
console.log(
  "splice <delete>- array element ko add, remove from particular index  =",
  deleted
);

//slice original array using splice
let splice_actSlice = arr.splice(1); // yeh pe 1 element se se pehile delete kardeta hai ....remianing slice karke original array pe store kar deta hai eglet arr = [1, 2, 3, 4, 5,7,6,8];     output:[3, 4, 5,7,6,8];
console.log(
  "splice <act_slice>- array element ko add, remove from particular index  =",
  splice_actSlice
); // yeh pe 1 element se se pehile delete kardeta hai ....remianing slice karke original array pe store kar deta hai eglet arr = [1, 2, 3, 4, 5,7,6,8];     output:[3, 4, 5,7,6,8];

let reversed_Value = arr.reverse(); // reverse - array ka element ko ulta karta hai
console.log("reverse - array element ko ulta  karta hai  =", reversed_Value);

let sort_Value = arr.sort(); // sort - array value ko sort karta hai
console.log("sort - array element ko sort   karta hai  =", sort_Value);

let idx_value = arr.indexOf(2); //indexof - yeh array ka woh index ka value return karta hai
console.log(
  "indexof  - array index ka wo value return karta hai  =",
  idx_value
);

let lastidx_value = arr.lastIndexOf(); //lastIndexOf -  yeh array ka last index ka value return karke deta hai
console.log(
  "lastindexof  - array ka last_index ka wo value return karta hai  =",
  lastidx_value
);

let isPresent = arr.includes(24); //includes - yeh array pe check karta hai value present hai ya nai  --output : true / false
console.log(
  "includes - array element pe value present hai ya nahi --check karta hai  =",
  isPresent
);

//<create new array >
let chars = "nishant"; //yeh sirf object pe applicable hai like string_object value
// let var_name = Array.from(onject_varNameOnly);     // don't use array here     patern observer
let convert_array = Array.from(chars); // Array.from() -  String ko array me convert karta hai
console.log(
  "Array.from() - object_var ko array pe convert  karta hai =",
  convert_array
);

// let var_name = Array.isArray(obj/arr_varName);         patern observer
let check_array = Array.isArray(chars); //Array.isArray() - check array hai ya nahi     output: true/false
console.log(
  "Array.isArray() - check  karta hai - array hai ya nahi  =",
  check_array
);

// let Arr_varName = new Array(X_times_fill) .fill(actualValue)     pattern observer
let fill_array = new Array(3).fill(3); //new Array().fill() - naya array banake - array pe multiple time same value har index pe  fill karta hai
console.log(
  "new Array().fill() - naya array pe multiple time value fill karta hai   =",
  fill_array
);

/*

 Nested Array Diagram:
 arr12 = [1, [2, [3]]]      3d dimensional array 
 
 Level 1 (Outer Array)          
 ┌───────────────┐
 │    [1, [...]] │
 └───────────────┘
          │
          ▼
 Level 2 (Inner Array)
 ┌─────────────┐
 │   [2, [...]]│
 └─────────────┘
         │
         ▼
 Level 3 (Innermost Array)
 ┌───────┐
 │   [3] │
 └───────┘


*/

let nested_Array = [1, [2, [3]]];

//<create new array >
//let arr_name = nestedArray_name . flat(<reduce_no.Of_D>)    jitna number pass karoge --utna nested dimensional reduce hoga(flatten karega)      pattern  observer
let nestedToSimple_Array = nested_Array.flat(2); //flat(2) - nested array ko mannually  2_dimesional tak  flatten/reduce karna
console.log(
  "flat - nested_array element ko simple array me convert karta hai  =",
  nestedToSimple_Array
);

/* idk

flatMap() me koi bhi function use kar sakte hain, bas ye ensure karein ki function array return kare.
let word= ["hello world","how are you " , "12345"];
let flatmapped = word.flatMap(word => word.split(" ")); // ['hello', 'world', 'how', 'are', 'you']
console.log("flatmapped value = ", flatmapped);

*/

console.clear();

// split(): String ko given character ya condition ("o") par tod kar array me convert karta hai
let word_value = "hello world";
let spilited = word_value.split("o");
console.log(
  "split() - String ko 'o' par tod kar array me convert karta hai =",
  spilited
); // Yaha par parameter "o" pass kiya gaya hai -- means jaise hi "o" mile, waha par element ko split karke alag-alag part bana dega

/*
array.copyWithin(target_index_wherePaste, copyIndex_start, copyIndex_end);

copyIndex_start :- yeh woh index hai, jaha se element ko copy karna start karega 
copyIndex_end:-yeh woh index hai , jaha se element ko copy karna end karega . remember.here, last element include nahi hoga 
target_index_wherePaste :- yeh woh index hai , jaha pe copy huwa element ko **paste** karna hai 

also agar copyIndex_end nahi diya toh , woh last takk copy kardega (.copywithin(1,2))     // aab end taak copy hoga 
*/

let array_one = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//let arr_varName = array_name.copyWithin (target_index_wherePaste, copyIndex_start, copyIndex_end);      // pattern observer
let copy_within = arr.copyWithin(1, 2, 4);
console.log(
  "copyWithin() targeted_element pe copy elment ko paste akrta hai  =",
  copy_within
);

let arr_ToString = array_one.toString(); //toString :- yeh array datatype ko string dataType convert kar deta hai
console.log(
  "toString() - yeh anotherDataType ko string_dataType pr convert kardeta hai =",
  arr_ToString
);

// get all value in array - by using for of loop
for (let values of array_one) {
  console.log(values);
}

/* ignore this one 
//.values() ka kaam hota hai array ke elements ko ek iterator object me wrap karna.
//Yeh tab useful hai jab tum iterator object ko manually handle karna chahte ho.
let iterator = array_one.values();    //values - element ko object pe convert kar deta hai 

console.log(iterator.next().value); // next - value ko 
console.log(iterator.next().value); // next - value ko 
console.log(iterator.next().value); // next - value ko 
console.log(iterator.next().done);  // true (iterator khatam)

/*
.next() :yeh method ek object return karti hai jisme do properties hoti hain:

value: Jo current element ko represent karta hai.
done: Boolean value batati hai ki iteration complete hui ya nahi.
*/

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// find :-yeh sirf  pehile matching element ko return karta hai

//let arr_varName = array_name.find((element) => condition);    // let assuming element as x and put condition ....agar condition match huwa to -- x pe assign ho jana
let found = data.find((x) => x > 3);
console.log(
  "find- yeh conditional element ko fist bala element retur kar deta hai = ",
  found
);

// findIndex() - pehle matching element ka index return karta hai
//array_name.findIndex((element) => condition);       // pattern observer
let found_index = data.findIndex((x) => x > 3);
console.log(
  "findIndex()- yeh conditional element ko fist bala element retur kar deta hai = ",
  found_index
);

//<create new array >
//filter- all matching elements--  jo condition ko fit hota hai-- unko naya array baanake deta  hai
let filtered = data.filter((x) => x < 5);
console.log(
  "filter() - Conditional matching elements ko nayi array me return karta hai = ",
  filtered
);

//<create new array >
//map(): har element per function(certain task ) kar sakte ho and aur nayi array return karta hai
let mapped = data.map((x) => x * 2); // here , all element function -- is multiply by two
console.log("map() - all element pe koi task perform kar sakte ho = ", mapped);

//every():- check karta hai sabhi elements condition ko match karta hai ya nahi (output:true/false return karta hai)
let allpositive_matchCheck = data.every((x) => x > 5);
console.log(
  "every() - check all element match the condition or not  = ",
  allpositive_matchCheck
); // agar ek bhi element condition ko match na kare -- then output:false and if all condition match then output:true

//some : check karta hia ke koi ek element condition ko match akrta hai ya nahi
let anypositive_matchCheck = data.some((x) => x > 5);
console.log(
  "some() - check any element match the condition or not = ",
  anypositive_matchCheck
); // agar ek bhi element condition ko match na kare -- then output:false and if any/ek  condition match then output:true

//forEach:- har element par function(specific task ) task perform karta hai  (kuch return nahi karta)
let forEach_function = data.forEach((x) => x * 5); //specific task :-  Har element ko 5 se multiply karke print karta hai
console.log(
  "foreach() - all element pe koi task perform kar sakte ho = ",
  forEach_function
);

/*

//  let result = array.reduce((accumulator, currentValue) => operation, initialValue);
where :-
 - accumulator: Pichle operation ka result ... isme store hota hai (initially initialValue).    .... de ma padheko this ne.....that accumulator previous ko data store garxa 
 - currentValue: Current element jo loop me hai.
 - initialValue: Accumulator ka starting value (optional, but recommended).

*/

/* 
 -  Diagram for Reduce() Syntax Flow:
 -  reduce((acc, x) => acc + 2, 0);      // pattern observer

 -  Initial Value (acc) = 0
 -  Array Elements: [1, 2, 3, 4, 5, 6, 0]

            +---+      +---+      +---+      +---+      +---+      +---+      +---+
            | 1 | ---> | 2 | ---> | 3 | ---> | 4 | ---> | 5 | ---> | 6 | ---> | 0 |
            +---+      +---+      +---+      +---+      +---+      +---+      +---+
              ↓          ↓          ↓          ↓          ↓          ↓          ↓
            +---+      +---+      +---+      +---+      +---+      +---+      +---+
 Acc = 0 -> |+ 2| -> 2 |+ 2| -> 4 |+ 2| -> 6 |+ 2| -> 8 |+ 2| -> 10|+ 2| -> 12|+ 2| -> 14
            +---+      +---+      +---+      +---+      +---+      +---+      +---+

// Final Output: 14
*/

//reduce() - Array ko task perform karke -- single value me reduce karta hai
let values = [1, 2, 3, 4, 5, 6, 0];
//                            ,------------------¬
let reduced = values.reduce((acc, x) => acc + 2, 0);
//                                    \----^
// => yeh arrow function hai jiska task hai (acc + 2) karna
//here , acc ka value 0 hai and  x present hai, par use ya kaam  nahi nahi hai yaha per .
console.log("reduce() - Array ko single value me reduce karta hai =", reduced);

/*

Difference between reduce() and reduceRight():

 ** Traversal Direction:
 - reduce(): Left to Right traversal (start se end tak).
 - reduceRight(): Right to Left traversal (end se start tak).

 ** Use Case:
 - reduce(): Generally used when order doesn't matter or when processing from the start.
 - reduceRight(): Used when you need to start processing from the end.

*/

// reduceRight() - Array ko task perform karke -- single value me reduce karta hai (right to left)
let values_again = [1, 2, 3, 4, 5, 6, 0];
//                                            ,------------------¬
let reducedRight = values_again.reduceRight((acc, x) => acc + 2, 0);
//                                                    \----^
// => yeh arrow function hai jiska task hai (acc + 2) karna
// here, acc ka value 0 hai aur x present hai, par use ya kaam nahi hai yaha par.
console.log(
  "reduceRight() - Array ko single value me reduce karta hai (right to left) =",
  reducedRight
);

/* let practice

let companies = ["Bloomberg" , "Microsoft", "uber" , "google" ,"IBM" ,"Netflix"];

//remove the first company from the array 
companies.shift();
console.log("remove the first company from the array = ", companies)

//remove uber and add ola in that place 
companies.splice(1 , 1 , "ola");
console.log("remove uber and add ola in that place= ",companies);

//add amazon at the end 
companies.push("Amazon");
console.log(" add amazon at the end  = ",companies);

*/
