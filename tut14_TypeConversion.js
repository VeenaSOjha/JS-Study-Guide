console.log("Typeof and TypeConversion");
//Data types that contain values
//>>String, Number, Boolean, Object, function
//There are six types of Objects
//>>Object, Array , String, Number, Boolean, Date
//Data types that cannot contain values
//>>Null Undefined

// //type of Operator
// console.log(typeof "John"); //String
// console.log(typeof 3.14); //number
// console.log(typeof NaN); //number
// console.log(typeof false); //boolean
// console.log(typeof [1, 2, 3, 4]); //Object
// console.log(typeof { name: "Veena", age: 38 }); //Object
// console.log(typeof new Date()); //Object
// console.log(typeof function () {}); //function
// console.log(typeof myCar); //Undefined
// console.log(typeof null); //Returns Object

//////////////////////////Type Conversion////////////////////////////////
//Converting Strings to Numbers
//The global method Number() can convert string to Numbers/NaN
// console.log(Number("45")); //45
// console.log("Hello");
// console.log(Number("Hello")); //NaN
// console.log(Number("     ")); //Empty strings returns 0
// console.log(Number("")); //Empty strings returns 0
// //There are more method that can convert string to numbers
// console.log(parseFloat("10.4567"));
// console.log(parseFloat("he10.4567")); //NaN
// console.log(parseInt("10.4567")); //returns 10

// //Unary + Operator can convert variable to number
// let y = "5";
// let x = +y;
// console.log(x); //5
// console.log(typeof x);//number

// //Converting Numbers to Strings
// //String() can convert numbers to String
// console.log(String(12));
// const x = 45;
// console.log(typeof x); //number
// console.log(String(x)); //45
// console.log(typeof String(x));
// //number.toString does the same thing
// x.toString(); //
// console.log(typeof x.toString());
///////////////////////////////////////////////////////////////////
//////Practice on Number conversion/////////////////////////////////
// const x = false;
// const y = true;
// //boolean to Number
// const b2Num = Number(x); //return 0
// const b2Num1 = Number(y); //returns1
// //When we convert boolean false to number it returns 0
// console.log(b2Num, typeof b2Num); //0 "number"
// console.log(b2Num1, typeof b2Num1); //1 "number"
// //boolean to String
// const b2Str = x.toString();
// console.log(b2Str, typeof b2Str); //"false", String
/////////////////////////////////////////////////////////////////////
// console.log(Number("0")); //0
// console.log(Number("0Hello")); //NaN
// console.log(Number("0 Hello")); //NaN
// console.log(Boolean(1)); //true
// console.log(Boolean(0)); //false
// console.log(Boolean("")); //false
// console.log(Boolean(" ")); //true//spaces is considered true
// console.log(Number("  ")); //0 empty string converted to number returns 0
// console.log(Boolean("0")); //true
// console.log(Boolean("000")); //true
// console.log(Boolean(00)); //false
// let x;
// console.log(Number(x)); //undefined converted to number will return NaN
// console.log(Boolean(x)); //false
// console.log(String(x)); //"undefined"
// console.log(x);
// let y = null;
// console.log(Number(y)); //0
// console.log(String(y)); //"null"
// console.log(Boolean(y)); //false

///////////////////////////////////////////////////////////////////
///Focus on Force notes on Type Conversion//////////////////////
//A varaible of one data type can be explicitly converted to another data type. Explicitly converting the data type is called "TypeCasting"
//>> 1 >> Number() = When used with new keyword object is created
// const numb = new Number(2345);
// console.log(numb, typeof numb); //Number{2345}, object
//>> Number() = When used as a method a number is returned
// const x = "2345";
// const tr = true;
// // const numb = Number(x);
// const bool = Number(tr);
// console.log(bool, typeof bool); //1, "number"
// // console.log(numb, typeof numb); //2345 "number"

//>>2 >> string() = When used with new keyword object is created
//and when used as a method a string is retruned
// const x = 2345;
// const t = true;
// const str1 = String(x); //"2345"
// const str2 = String(t); //"true"
// console.log(str1, str2);
// console.log(typeof str1, typeof str2); //"string"

//>> Boolean>> when used with new keyword object is created
//when used as method a boolean primitive is returned
//const a = "false";
// const b = 2345;
// const c = "stringsss";
// const d = "";
// const e = " ";
// const f = 0;
// const g = undefined;
// const h = null;
// const i = -0;
//const bool1 = Boolean(a); //true
// const bool2 = Boolean(b); //true
// const bool3 = Boolean(c); //true //
// const bool4 = Boolean(d); //false//empty string
// const bool5 = Boolean(e); //true// space is there
// const bool6 = Boolean(f); //false
// const bool7 = Boolean(g); //false
// const bool8 = Boolean(h); //false
// const bool9 = Boolean(i); //false
//console.log(bool1);//true
// console.log(bool2);
// console.log(bool3);
// console.log(bool4);
// console.log(bool5);
// console.log(bool6);
// console.log(bool7);
// console.log(bool8);
// console.log(bool9);
// console.log(typeof bool1);
// console.log(typeof bool2);
// console.log(typeof bool3);
// console.log(typeof bool4);
// console.log(typeof bool5);
// console.log(typeof bool6);
// console.log(typeof bool7);
// console.log(typeof bool8);
// console.log(typeof bool9);

///////////////////////////////////////////////////////////////////
///toString Method converts a number or boolean to a string
// const x = 4567;
// const y = x.toString();
// console.log(y, typeof y); //4567 string

// const b = true;
// const c = b.toString();
// console.log(b, typeof c); //"true", "string"

//////////////////////////////////////////////////////////////////
////parseInt() method converts a String to number or NaN
// const x = "321";
// const y = "Hello";
// const z = true;
// const a = parseInt(x);
// const b = parseInt(y);
// const c = parseInt(z);
// console.log(a, typeof a); //321 number
// console.log(b, typeof b); //NaN number
// console.log(c, typeof c); //NaN number

//////////////////////////////////////////////////////////////////
////parseFloat() method converts a String to number or NaN
// const a = parseFloat("10.23");
// console.log(a, typeof a);

//Object can be converted to Arrays
//Object.values(obj)
//Object.keys(obj)
// const person = {
//   companyName: "IBM",
//   place: "India",
//   year: 1956,
// };

// // for (let keys in person) {
// //   console.log(person[keys]); //IBM INDIA 1956
// // }

// const personArr = Object.values(person);
// console.log(personArr); //array of values
// const personKey = Object.keys(person);
// console.log(personKey); //array of keys

//String to Arrays
//String can be converted to an Array
//original array is not changed and the new array is used
// const string = "Welcome to my world";
// console.log(string);
// const string2Arr = string.split(" ");
// console.log(string2Arr); //["Welcome", "to", "my", "world"]
// console.log(string2Arr.length); //4
// string2Arr[3] = "duniya";
// console.log(string2Arr); //["welcome", to, my, duniya]
// console.log(string); //welcome to my world

//Another way to convert string to Arrays
// const letters = "Coding is fun";
// const arr = [...letters, !]
// console.log(arr)

//Array.from and Array.of
//Array.from is array of iterables like string and set
// let str = "hello";
// let a = Array.from(str);
// let b = [...str];
// console.log(a);
// console.log(b);

// //Array.of
// //Array.of is array of arguments with commas
// let c = Array.of(str, "world", 5);
// console.log(c);
// ["hello"];
// let d = Array.of(1234);
// let e = Array.from("1234");
// console.log(d);
// console.log(e);

/////Practice on Type conversion////////////////
//We can convert number/boolean to strings by String() or .toString() method
//We can conver strings/boolean to number by Number(), parseInt, parseFloat
//We can convert number/strings to boolean by Boolean()

// //Boolean to String
// console.log(String(true)); //"true"
// console.log(String(false)); //"false"
// //Number to String
// console.log(String(0)); //'0"
// console.log(String(12.345)); //"12.345"
// const x = 12456;
// console.log(x.toString()); //("12456");
// //String to boolean
// console.log(Boolean("hi")); //true
// console.log(Boolean("")); //false
// console.log(Boolean("0")); //true
// //Number to Boolean
// console.log(Boolean(1)); //true
// console.log(Boolean(100)); //true
// console.log(Boolean(0)); //false
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("")); //false
// console.log(Boolean(NaN)); //false
// console.log(Boolean(-0)); //false
// console.log(String(true)); //"true"
// console.log(String(false)); //"false"
// //Number to String
// console.log(String(0)); //'0"
// console.log(String(12.345)); //"12.345"
// const x = 12456;
// console.log(x.toString()); //("12456");
// //String to boolean
// console.log(Boolean("hi")); //true
// console.log(Boolean("")); //false
// console.log(Boolean("0")); //true
// //Number to Boolean
// console.log(Boolean(1)); //true
// console.log(Boolean(100)); //true
// console.log(Boolean(0)); //false
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("")); //false
// console.log(Boolean(NaN)); //false
// console.log(Boolean(-0)); //false

//string to Number
// console.log(Number("hi")); //NaN
// console.log(Number("234.34")); //234.34
// console.log(Number("234.34")); //234.34
// console.log(parseInt("234.34")); //234
// console.log(parseFloat("234.34")); //234.34
// console.log(Number("true")); //NaN
// console.log(Number("")); //0
// console.log(Number(undefined)); //NaN
// console.log(Number(null)); //0
// //boolean to Number
// console.log(Number(true)); //1
// console.log(Number(false)); //0
//

//Notes
//When we convert numbers or boolean to String what happens
// console.log(String(0)); //"0"
// console.log(String(null)); //"null"
// let x;
// console.log(String(x)); //'undefined
// //Everything is returned as it is in string format

//When we convert boolean or string or undefined and null to number
// console.log(Number(true)); //1
// console.log(Number(false)); //0
// console.log(Number(null)); //0
// console.log(Number("")); //0
// console.log(Number(undefined)); //NaN
// console.log(Number("234")); //234
// console.log(Number("hi")); //NaN
//emptystring, false and null if converted to number will be 0

//When we convert anything to boolean
//Any number except 0 or -0 will return true
//Any String except empty string is true
//undefined null are false
// console.log(Boolean(1)); //true

//Converting objects values and keys in array
// const obj = {
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
// };

// console.log(Object.values(obj));
// console.log(Object.keys(obj));

//Converting strings to Arrays
//split method : creates new array from string
// let str = "This is a String";
// let splitArr = str.split(" "); //splits with spaces
// splitArr[2] = "an";
// splitArr[3] = "Array";
// console.log(splitArr);

//spread method
// let str = "this is a string";
// console.log([...str]);

//Array.of
// let str = "hi";
// let str1 = "hello";
// console.log(Array.of(str, str1));

//Array.from
// let str = "This is a String";
// console.log(Array.from(str));//Works like spread
// let num = "1234567";
// console.log(Array.from(num));
// const numArray = Array.from(num).map((v) => Number(v));
// console.log(numArray);
// let num = "1234231235678432222";
// let uniqueNum = new Set(num);
// console.log(uniqueNum);
// let ArrFrmSet = Array.from(new Set(num));
// console.log(ArrFrmSet);

// console.log(typeof (1 + 2 + "3")); //33
// console.log(1 + "3"); //13
// console.log(typeof (1 + 13)); //4
// console.log("3" + 1 + 2); //312
// console.log("1" + NaN); //1Nan
// console.log(NaN + "1"); //Nan1
// console.log(NaN + 1); //NaN
// console.log(1 + true); //2
// console.log({} == 0); //false
// console.log([] == 0); //true
// console.log(5 - null); //5

// console.log(String([5, 10, 15]));

// function convertBool(obj, prop) {
//   obj[prop] = Boolean(obj[prop]);
// }

// let boardRoom = {
//   capacity: 15,
//   reservable: 5,
// };
// let lunchRoom = {
//   capacity: 150,
//   reservable: 0,
// };
// convertBool(boardRoom, "reservable");
// console.log(boardRoom);

// function processScore(obj, passScore) {
//   if (obj.score) {
//     if (obj.score > passScore) {
//       obj.pass = true;
//     } else {
//       obj.pass = false;
//     }
//   }
// }
// function processScore(obj, passScore) {
//   if (String(obj.score) > -1) {
//     if (obj.score > passScore) {
//       obj.pass = true;
//     } else {
//       obj.pass = false;
//     }
//   }
// }

// let obj1 = {
//   pass: "",
//   score: 0,
//   marks: 24,
// };

// processScore(obj1, 90);
// console.log(obj1);
// console.log(Boolean(obj1.score));

//if the obj.score is 0, null or undefined or falsy value
// //In that case the function doesnot do anything
// let points = null;
// let result = "";
// if (String(points) >= -1) {
//   if (points < 35) {
//     result = "fail";
//   } else {
//     result = "pass";
//   }
// } else {
//   console.log("result is unknown");
// }
// console.log(points); //null //0//undefined
// console.log(result); //fail//fail//emptystring
// // console.log(String(points));
// //Problem: When points is 0 result should be fail
// //the condition shoulnt chk for just points but if points value is greater than -1//or else if the points is 0 or greater than that
//null will also result in fail
//but it wont work on undefined
// console.log(Number(undefined)); //NaN
// console.log(Number(null)); //0
// console.log(null > -1); //true
// console.log(undefined > -1); //false
// console.log(String(null)); //"null"; which is a true value
// console.log(String(undefined)); //"null"; which is a true value
// console.log(String(null) > -1);
// console.log(String(undefined) > -1);
// let a = String(null);
// console.log(Number(Boolean(a))); //its true//1
// console.log(1 > -1);
// console.log(String(null) > -1);
// let b = "null".charCodeAt("n");
// console.log(b);
// console.log(110 > -1);
// //A non-numeric string converts to NaN which is always false
// console.log("null" > -1); //false
// console.log("null" < -1); //false
// //anywhich ways when comparing strings that has no number is NAN and results in false when compared
// console.log("hello" > -1); //falsy
// console.log("0" > -1); //true
// console.log(Number("")); //0
// console.log(Boolean("")); //false
// console.log(0 > -1);

// console.log({} == 0); //false
// console.log([] == 0); //true

// console.log(Boolean()); //empty boolean construcor is false

// //valueof method used to check for instances

// const b = new Boolean(); //value is empty but when check for instance its true
// console.log(b.valueOf()); //false checks primitive value
// console.log(Boolean(b)); //true

// const s = new String();
// console.log(s.valueOf()); //empty
// console.log(Boolean(s)); //true

// const n = new Number();
// console.log(n.valueOf()); //0
// console.log(Boolean(n)); //true

// const n1 = 0;
// console.log(Boolean(n1)); //false
// console.log(n1.valueOf()); //0

//Loose Equality Operator
// console.log(`1 == 1 is `, "1" == 1); //true
// console.log(`1 == [1, 2] is `, "1" == [1, 2]); //false
// console.log(`"1" == [1] is `, "1" == [1]); //[1] converted to primitive value
// console.log(`[1] == [1] is `, [1] == [1]); //false dont compare arrays
// console.log(`{} = {} is `, ({} = {})); //false objects cant be comapred
// console.log(`0 == "0" is `, 0 == "0"); //true
// console.log(`0 == ""`, 0 == ""); //empty string is 0 when converted to number//true
// console.log(`"" == "0" is `, "" == "0"); //true both will be conveted to number
// console.log(`false == "false" is `, false == "false"); //true;
// console.log(`false == '0' is`, false == "0"); //true
// console.log(`false == null is `, false == null); //true
// console.log(`false == undefined is `, false == undefined); //true
// console.log(`null == undefined is `, null == undefined); //true
// console.log(`0 == undefined is `, 0 == undefined); //false
// console.log(`0 == null is `, 0 == null); //true
// console.log(new String("tim") == "tim"); //true

// //note: When string is compared to a number , the value of string is conveted to a number
// //In case the string is not a number NaN then in that case the result will be false
// // console.log(`'5' == 5 is true `, "5" == 5); //true
// console.log(`12 > 6 is true`, 12 > "6"); //true
// console.log(`String > 1 is false`, "String" > 1);
// //When an array or object is compared with string in that case if the string has the same value and only one value it will return true
// console.log(`"String" == ["String"] will be true`, "String" == ["String"]);
// console.log(
//   `"String, Hello" == ["String", "Hello"] will be false`,
//   "String Hello" == ["String", "Hello"]
// ); //both the values are same still it will be false because 2 values in array
// //Comaparing strings or numbers with arrays
// console.log(`[1,2,3] == 1,2,3 is `, [1, 2, 3] == 1, 2, 3);
// console.log([1] == 1); //true
// console.log([1] == "1"); //true
// console.log([] == []); //false
// console.log(`\t\r\n` == 0); // true
