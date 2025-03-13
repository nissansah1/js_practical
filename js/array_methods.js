// loop mostly used in (array , object ,loops)
// moslty in internal , data is store in array and object form


// in array ,sometime when we perform some array methods, it cahnge the save within the same array , sometimes it gives new array

let veg = ["tomato", "potato", "onion", "brinjal"];



veg.push("cauliflower");     //push used to -- add value in last of this array <original array value change>
console.log("push used to add one value in last=", veg);



let delete1 = veg.pop();          //pop used to -- delete value from last of this array <original array value change>
console.log("pop used to delete one value in last=", delete1);      //here , i can see which value is delete ,by assigning the delete value in delete1 var



tostring_copy_new_arr = veg.toString();     //toString used to -- convert diff datatype into string <copy array value change>

console.log("new_arr_created to store copy arry of toString value=", tostring_copy_new_arr);        //here new array create to store toString value -- where original array value is not change.

console.log("original value = ", veg);      //nothing change ,by using toString method


