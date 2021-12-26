// console.log("Comparision Operators");
// //Equal to  "==" and equal value and type "==="
// //just checks the value
// let x = 5;
// console.log(x == "5"); //true
// console.log(x === "5"); //false
// //Not equal !=
// console.log(x != 8); //true
// //not equal to value and type
// console.log(x !== 5); //false
// console.log(x !== "5"); //true

// //&& || !

// //Ternary Operator
// let age = 14;
// let voteable = age < 18 ? "Too Young" : "Old Enough";
// console.log(voteable); //Too Young

// //Comparing different types
// //empty string is NaN
// console.log(2 < 12); //true as 2 is less than 12
// console.log(2 < "12 "); //true as 12 string will be converted to number
// console.log(2 < "John"); //false as string returns NaN
// console.log(2 < ""); //false as empty string is NaN

// //What if two number strings are compared
// console.log("number Strings");
// console.log("2" < "12"); //false
// //To solve it we need to convert the string to numbers
// console.log(parseInt("2") < parseInt("12")); //true
// //or any one of them can be integer
// console.log(parseInt("2") < "12"); //true
// console.log("2" < parseInt("12")); //true
