// alert("happy time ")

console.log(7 + 3);
console.log("print ")

var varib = 45    //var used to store but again you can declare and initialize the var
console.log(varib)

let a = 5;    //let used to store value in js again you can declare but not initialize
console.log(a)

const constant = 45;      //const use to store value in js again you can  not declare and  not initialize again >> use for miostly fix time
console.log(constant)

console.log('single colon \n test display');
// when you try to display . you can use single colon 
//  \n is used for next line 

console.log("double colon text display ");
//  but when you display the [single colon on browser in text or any place then we use double colon] e.g
console.log("you're weolcome'  here ")

console.log(`backtick used in to display singlie colon text `)
// it used in professional time 

console.log("i don't know how its work , learn again  'anna '" + 6 + 8);
// i don't know how its work , learnagain  

//concation is used to add text to another text,int and manymore etc.
console.log('happy ' + 'time');
console.log('you have got ' + 4.5 + ' star out of ' + 5);
//number + string = string 

//bracket is first priority than odmas 
//eg -- here int add under string bcz of backet 
console.log('fuck you ' + (1 + 1) + ' bitch');    //output 2

//eg -- here int not add under string bcz of not backet 
console.log('fuck you ' + 1 + 1 + ' bitch');    // outout 11


// now start from apna collage 
let name = "tony";   //string datatype store
let age = 29;       //integer datatype store
character = 98.99;  //float datatype store
x = null;       //null datatype store - means nothing store in variable>>empty
y = undefined;  //don't know , what the things inside 
IsFollow = false;    // boolean tye data

// tips - in company all varibale name is professional related to concept/topic also their id,class

// Naming Cultures:
// - 🐪 Camel Case → `fullName` ✅ (Company recommended)
// - 🔤 Normal Case → `fullcase`
// - 🐍 Snake Case → `full_name`
// - 🥖 Kebab Case → `full-name`
// - 🎩 Pascal Case → `FullName`  

console.log(name);      //used to display value
console.log(typeof name);       //used to display datatype -> use typeof method

console.log(age);
console.log(typeof age);    // display datatype

console.log(character);
console.log(typeof character);

console.log(x);
console.log(typeof x);

console.log(y);
console.log(" display datatype = " + typeof y);

// colsole.log(IsFollow);
console.log(" display datatype = " + typeof IsFollow);


// you can also store variable  value without give let,var,const (before var)


// - case sensetive - ge Name and name // bith var is differ

{
    let a = 10;
    console.log('internal curly bracket value of internal_value_a  display only - under of declare one var. = ' + a);
}

{
    let a = 5;
    console.log('internal curly bracket value of internal_value_a  display only - under of declare one var. = ' + a);
}

console.log('it printed the last one var. value of same name = ' + a);

// primitive - number, string,boolean,undefined ,null ,bigint ,symbol
//non-primitive - bojects (arrays, function)


/*
//objects means collections of values
    eg :- name      //string
          age       //age
         marks      //numbers
         isPass      //booleans

let/const students {    //pattern observer 
     key :value,
     key :value
};
*/

const Students = {
    name: "Nishant sah",
    age: 24,
    marks: 8.5,
    isPass: true
};

console.log(Students);      //display in form of key:value 
console.log(typeof Students);       //display datatype - output: object
//console.log(typeof var_name);   //pattern observer


// first methods to print actual single value of object
console.log(("display actual single key vlaue = ") + Students["name"]);
console.log(Students["age"]);
console.log(Students["marks"]);      // display actual single key vlaue
console.log(Students['isPass']);
//console.log(obj_name["key_name"]);    //pattern onserv


//seconds methods to display actual single key value of objects
console.log(Students.name);
console.log(Students.age);
console.log(Students.marks);
console.log(Students.isPass);
//console.log(obj_name.key_name);   //pattern observer

//methods one perform operation on objects value  eh:- 
Students.age = Students.age + 1;      //now age is added 
//obj.key = obj.key < operand > operand_value     //pattern observer

//methods two to perrform operation on object value eg:-
Students["marks"] = Students['marks'] + 0.5;
//obj["key_"] = obj_name["key_"] < operand > operand_value     //pattern observer

//change value of objects 
Students.name = "tony stark";
Students["marks"] = 6.5;

//print updated value 
console.log("updated obj key-value =" + Students.name);
console.log("updated obj key - value= " + Students["age"]);


//display datatype of obj key 
console.log(typeof Students.name);
console.log(typeof Students['age']);    //display the obj- key datatype
console.log("display the obj- key datatype of marks = " + typeof Students.marks);
console.log(typeof Students["isPass"]);

// console.clear();