console.log("All about Numbers in JS");

//JavaScript uses the + operator for both addition and concatenation.
//Numbers are added. Strings are concatenated.
//if you add a number and a string, the result will be a string concatenation or vice versa

// let x = 100 / "Apple";
// console.log(x); //NaN
// console.log(isNaN(x)); //true

//If you use NaN in a mathematical operation the result will always be NaN

// let x = NaN;
// let y = 5;
// let z = x + y;
// console.log(z); //will be NaN because z = NaN

// //Or result might be a concatenation
// let a = NaN;
// let b = "5";
// console.log(a + b); // NaN5

// //type of NaN is number
// console.log(typeof a); // number

// Numbers Can be Objects
// let x = 123;
// let y = new Number(123);
// console.log(typeof x); //Number
// console.log(typeof y); //object
// console.log(Number("123") === 123); //true

//JavaScript Number Methods

//number.toString() Method returns a number as a string////////////
// let x = 123;
// let y = x.toString();
// console.log(typeof y); //string

// //number.toFixed()///////////////////////////////////////////
// let a = 9.6578;
// let b = a.toFixed(2);
// console.log(b); //9.66
// console.log(typeof b); //string

// //number.toPrecision()//////////////////////////////////////////
// let a = 9.656;
// let b = a.toPrecision(2);
// console.log(b); //9.7

//number.valueOf()///////////////////////////////////////////////
// let x = 100 + 23;
// console.log(x.valueOf()); //123

//Converting variables to Numbers
//1)) Number() method
// console.log(Number(true)); //returns 1
// console.log(Number(false)); //returns 0
// console.log(Number("10")); // change the string to number
// console.log(Number("Hello")); //NaN
// console.log(Number(undefined)); //NaN
// console.log(Number(null)); //0

//2)) parseInt() method
//Only the first number is retruned
// console.log(parseInt("-10")); //-10
// console.log(parseInt("years 10")); //NaN
// console.log(parseInt("20 30 40")); //20

//3)) parseFloat()method
//parseFloat()
//console.log(parseFloat("10.33"));//returns 10.33

// //////focus on force notes on numbers////////////////////////
// //String Boolean and number data types cannot contain properties
// //but each of these data types has an object wrapper class which allow them to contain properties
// let amount = 5123.4556;
// //This variable is converted to a Number Object before toFixed() is called
// amount.toFixed(2);
// //or wrapper object are instantiated by using new keyword
// let amount2 = new Number(5123.4556);

// console.log(typeof amount); //number
// console.log(amount2 instanceof Number); //true
// console.log(typeof amount2); //object

// let amt = amount.toFixed(2);
// console.log(amt, typeof amt);//5123.46 , type is string

//The number type in JS can be used to obtain useful info about specified number or converting a string to a number or vice versa
//Example isInteger(), parseFloat(), toString()

//Is integer()
// function fits(x, y) {
//   if (Number.isInteger(y / x)) {
//     return "fits";
//   } else {
//     return "not fits";
//   }
// }

// console.log(fits(5, 10));
// console.log(fits(5, 11));

// const numb = 13.5;
// const numb2 = 13;
// console.log(Number.isInteger(numb)); //false
// console.log(Number.isInteger(numb2)); //true

//////The global isNaN() is different from the Number.isNaN function
//The global isNaN() first coreces the value to a number
//The Number isNaN() does not change  the value to a number

// const a = "f234";
// const b = isNaN(a);
// console.log(b); //true
// const d = Number.isNaN(a);
// console.log(d); //false

/////Example
//in this function several number method are used to process a string to a number

// function stringToNum(str) {
//   if (Number.isNaN(str)) {
//     //to check if the string has a number
//     throw "String can not be converted";
//   }

//   if (Number.isInteger(str)) return Number.parseInt(str);
//   //return integer
//   return Number.parseFloat(str); //return Float
// }
// console.log(stringToNum("5.65.abcde")); //5.65
// console.log(stringToNum("5.8493asdfgg").toFixed(2)); //5.85
// console.log(stringToNum("5.8493asdfgg").valueOf()); //5.8493
// console.log(stringToNum("salesforce"));//NaN

// console.log(Number.isNaN("Salesforce")); //
// //false ...that means its false that it is not a number
// //it means it is a Number
// console.log(isNaN("Salesforce")); //true

// console.log(Number.isNaN("234")); //false
// console.log(Number.isNaN("Salesforce")); //false
// console.log(isNaN("Salesforce")); //true
// console.log(Number.isInteger("456.65")); //false
// console.log(Number.isInteger("456")); //false
// console.log(Number.isInteger(456)); //true

// //>>Number.isNaN just checks whether the passed value is not a number or cannot be conveted to a number
// let a = "Stringssss";
// let b = 345;
// let c = a / b;
// console.log(Number.isNaN(a)); //false
// console.log(Number.isNaN(b)); //false
// console.log(Number.isNaN(c)); //true

// //Example string 'ponyfoo' is not a number and cannot be converted to number, but it is not NaN

// // console.log(Number.isNaN({})); //false //{} is not NaN
// // console.log(Number.isNaN("ponyFoo")); //false string is not NaN
// // console.log(Number.isNaN(20 / "apple")); //true it is NaN
// // console.log(Number.isNaN("b" + "apple")); //true it is NaN

// console.log(isNaN({})); //true as its not a number
// console.log(isNaN("ponyFoo")); //true as its is not a number

//Globla isNaN and Number.isNaN

//isNaN :=> checks whether the value is not a number
//Number.isNaN :=> checks the value equals to NaN

// let nan_num = "apple" / 2;
// console.log(isNaN(nan_num)); //true // value is not a number
// console.log(Number.isNaN(nan_num)); //true//value is NaN

// console.log(isNaN("ponyFoo")); //true //value is not a number
// console.log(Number.isNaN("ponyFoo")); //false// value is not NaN
// console.log(Number.isNaN("ponyFoo" / 2)); //true// value is NaN

// console.log(isNaN({})); //true //value is not a Number
// console.log(Number.isNaN({})); //false //value is not NaN

// //So Number.isNaN will check if value is NaN and for all other cases it will just see if the value passed is NaN or not
//isNaN will be true only when value is number other than that for all it will come as NaN
