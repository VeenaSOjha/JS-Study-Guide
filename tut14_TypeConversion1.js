"use strict";
//Converting any other data type to string is very easy
//use String constructor

// ***Number to String***
// console.log(String(23)); //will convert string to number
// console.log(String(23.33));

// ***Boolean to String***
// console.log(String(true));
// console.log(String(false));

// ***Undefined and Null String***
// console.log(String(undefined));
// console.log(String(null));

// ***Arrays to String***
// console.log(String([1, 2, 3])); //1,2,3
// console.log(String(["A", "B", "C"])); //A,B,C

// ***Objects to String***
// const obj = { a: 1, b: 2 };
// const obj2Str = String(obj);
// console.log(obj2Str); //[object Object]
// const obj2Str2 = JSON.stringify(obj);
// console.log(obj2Str2);//correct way

//use .toString method

// ***Number to String***
// const num = 24;
// console.log(num.toString());

// // ***Boolean to String***
// const bool = false;
// console.log(bool.toString());

// // ***Undefined and Null String***
// // let x;
// // console.log(x.toString()); //TypeError: cannot read prop ofundefined
// // let y = null;
// // console.log(y.toString()); //cannot read prop of null

// // ***Arrays to String***
// console.log([1, 2, 3].toString()); //1,2,3
// console.log(["A", "B", "C"].toString()); //A,B,C

// ***Objects to String***
// const obj = { a: 1, b: 2 };
// const obj2Str = obj.toString();
// console.log(obj2Str); //[object Object]
// const obj2Str2 = JSON.stringify(obj);
// console.log(obj2Str2);//correct way

//Numbers : converting anything to number can be done by Number()
//Other ways: parseInt(), parseFloat, to check if its number
//isInteger()

//***Strings to Number***
//if the string passed is not a number result will be NaN
// console.log(Number("23.12"));
// console.log(parseInt("42.63"));
// console.log(parseFloat("12.54"));
// console.log((12.3456777).toFixed(2)); //fixed function works on numbers
// console.log(Number("n12")); //NaN

// ***Boolean to Number***
// console.log(Number(true)); //1
// console.log(Number(false)); //0

// // ***Null/undefined/Empty/0***
// console.log(Number(null)); //0
// console.log(Number(undefined)); //NaN
// console.log(Number("  ")); //0//with or without spaces
// console.log(Number("0")); //0

// ***Arrays to Number***
// console.log(Number([1, 2, 3])); //NaN
// console.log(Number([])); //0
// // // ***Obj to Number***
// // console.log(Number({ a: 1, B: 2 })); //NaN
// console.log(Number({}));//NaN

// Booleans: use Boolean constructor

// ***String to Boolean***
//anything inside "" will be true except if its empty no spaces
// console.log(Boolean("true")); //true
// console.log(Boolean("false")); //true
// console.log(Boolean("")); //false
// console.log(Boolean("  ")); //true
// console.log(Boolean("0")); //true
// console.log(Boolean("John")); //true

// ***Number to Boolean***
//Any number passed to boolean constructor will be true except 0 and -0
// console.log(Boolean(0)); //false
// console.log(Boolean(1)); //true
// console.log(Boolean(1000)); //true
// console.log(Boolean(-0)); //false
// console.log(Boolean(-1)); //true
// console.log(Boolean(Infinity)); //true
// console.log(Boolean(-Infinity)); //true

// ***Array to Boolean***
//console.log(Boolean([])); //true
//console.log(Boolean([1, 2, 3])); //true

// ***Object to Boolean***
// console.log(Boolean({})); //true
// console.log(Boolean({ a: 1, b: 2 }));//true

// Arrays
//converting string into Arrays or object to Arrays is possible
//We cannot convert number or boolean ..no sense

// ***Strings to Arrays***
// const str = "JavaScript is Fun";
// console.log([...str]); // ["j", "a", "v"...]
// console.log(str.split(" ")); //["javascript", "is", "fun"]
// console.log(Array.from(str));

// // ***Object to Arrays***
// let obj = {
//   "key a": 1,
//   "key b": 2,
//   "key c": 3,
// };
// let keyArr = Object.keys(obj);
// console.log(keyArr);
// let valueArr = Object.values(obj);
// console.log(valueArr);
// let entries = Object.entries(obj);
// console.log(entries);

///Implicit Conversion////////////////
// console.log(String(null) > -1);
// console.log(String(undefined) > -1);

// const bool = true; //will be coerced to 1
// const str = "5";
// console.log(bool < str);
// console.log(15 < 6 < 0); //15<6 =true which is 1 is not greater than 0 so false
