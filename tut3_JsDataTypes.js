console.log("JS Data Types");
//Strings
//Number
//Boolean
//Undefined
//Null
//Object
//BigInt
//Symbol

//When adding a number and a string, JavaScript will treat the number as a string.
// let x = "16" + "Volvo";
// console.log(x); //16Volvo
// let y = 5 + 11 + "Volvo";
// console.log(y); // 16Volvo
// let y = "5" + "11" + "Volvo";
// console.log(y);/"511Volvo"

//JavaScript evaluates expressions from left to right. Different sequences can produce different results:
// let a = 16 + 4 + "Volvo";
// console.log(a); //20Volvo;
// let b = "Volvo" + 16 + 4;
// console.log(b); //Volvo164

//Dyanmic type
// let x; //undefined
// console.log(typeof x);
// x = 5; //Now it is number
// console.log(typeof x);
// x = "John"; //Now string
// console.log(typeof x);
// x = true; //Now boolean
// console.log(typeof x);

// //typeof allows to check the type of variable
// let role;
// console.log(typeof role);
// console.log(typeof role === undefined); //false
// console.log(typeof role == undefined);//false
// //so always use string undefined to compare
// let visits;
// if (typeof role == "undefined") {
//   role = "Guest";
// }

// //please note that null == undefined is true
// //but null === undefined is false
// if (visits == null) {
//   visits = 1;
// }
// let user = { mode: role, Noofvisits: visits };
// console.log(user);

// let someNumber = 23;
// console.log(typeof someNumber == Number); //false
// console.log(typeof someNumber === Number); //false
// console.log(typeof someNumber === "number"); //true
// console.log(typeof someNumber);

// let bool = true;
// console.log(typeof bool == Boolean); //false
// console.log(typeof bool === Boolean); //false
// console.log(typeof bool === "boolean"); //true

// //////////////////////////////////////////////////////////////////////////Symbol/////////////////////////////////////////
// //Allows to create unique identifier
// //can be created by invoking the Symbol function
// //Initialise a symbol variable
// let name = Symbol();
// //A string can be passed to the function as its description
// let label = Symbol("label");
// /////Symbol variables are unique
// let field1 = Symbol("field");
// let field2 = Symbol("field");
// console.log(field1 === field2); //false
// console.log(Symbol("field") == Symbol("field")); //false

// let fruit = Symbol("apple");
// console.log(fruit);//Symbol(apple)
// console.log(typeof fruit);
//"symbol");

////Null and Undefined data types
// let x; //undefined
// console.log(typeof x); //"undefined"
// console.log(typeof x == undefined); //false
// console.log(typeof x === undefined); //false
// //Why is the typeof x coming false
// //because it checks the value in string format
// //always check the typeof in string format
// console.log(typeof x == "undefined"); //true
// console.log(typeof x === "undefined"); //true

// //What if we just check the value and not typeof
// console.log(x == "undefined"); //false coz its a string
// console.log(x === "undefined"); //false coz its a string
// console.log(x === undefined); //true coz value is undefined
// console.log(x == undefined); //true coz value is undefined

// // let y = null;
// // console.log(y == null); //true
// console.log(y === null); //true
// console.log(y == "null"); //false coz this is string
// console.log(y === "null"); //false coz this is string

// let num = 456;
// console.log(typeof num); //"number"
// console.log(typeof num == "number"); //true
// console.log(typeof num === "number"); //true
// console.log(typeof num === Number); //false
// //basic theory is always check typeof in string format

///Practice Points///////////////////
//String , boolean and number have access to method because of object wrapper class
// let x = 123.4566;
// let y = x.toFixed(2);
// console.log(typeof x == "number"); //true
// console.log(x instanceof Number); //false
// console.log(typeof y); //string
// let z = new Number(123.234);
// console.log(typeof z); //object
// console.log(z instanceof Number); //true
