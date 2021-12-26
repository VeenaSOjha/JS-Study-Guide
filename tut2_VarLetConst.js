// console.log("JavaScript Let, Var, Const");

//We can decalre a variable using let var and const
//the name of variable is known as identifier and it must conform to certain naming rules
//the identifier must begin with letter or $ or _
//can not start with digit
//but can contain digits, letter, or dollar sign

//When to use Strict mode
//Use when to avoid using variables that have no declaration

//********About Let, their redeclaration and block scope*********///////
//let can not be redeclared////////////////////////////////////////////
//Once declared with let you cannot redeclare the same variable with any other identifier let const or var
// let fruit = "apple";
// let fruit = "Orange"; //cannot redeclare
// console.log(fruit);//Error

// let fruit = "apple";
// var fruit = "Orange"; //cannot redeclare
// console.log(fruit);

// let fruit = "apple";
// {
//   fruit = "orange"; //this will change the fruit to orange;
// }
// console.log(fruit); //orange

// let x = 2;
// if (true) {
//   x = 5;
// }
// console.log(x); //5

// let y = 2;
// if (true) {
//   let y = "Hello";
//   console.log(y);
// }
// console.log(y);
// "use strict";
// // let should be declared before use////////////////////////////////////
// fruit = "apple";
// // let fruit;
// console.log(fruit); //cannot access fruit before initialisation error

//let provides Block Scope/////////////////////////////////////////////
// let city = "Delhi";
// console.log(city); //Delhi
// {
//   let city = "Bombay";
//   console.log(city); //Bombay
// }
// console.log(city); //Delhi

// let city = "Delhi";
// console.log(city); //Delhi
// {
//   var city = "Bombay";
//   console.log(city); //Error with var
// }
// console.log(city); //Delhi

//but if city is not declared in block in that case city will be changed
// let city = "Delhi";
// console.log(city); //Delhi
// {
//   city = "Bombay"; //city is not declared so globally it will change
//   console.log(city); //Bombay
// }
// console.log(city); // Bombay

//Var can be redeclared and also doesn't have block scope////////////////
// var city = "Delhi";
// console.log(city); //Delhi
// {
//   var city = "Bombay"; //redeclaring it with var will change it globally
//   console.log(city); //Bombay
// }
// console.log(city); //Bombay

// var city = "Delhi";
// console.log(city); //Delhi
// {
//   city = "Bombay"; //var city is now changed to delhi and can be accessed
//   console.log(city); //Bombay
// }
// console.log(city); //Bombay

// let city = "Delhi";
// console.log(city); //Delhi
// {
//   var city = "Bombay"; //Syntax error : can;t redeclare
//   console.log(city);
// }
// console.log(city); //Bombay

// let city = "Delhi";
// console.log(city); //Delhi
// {
//   city = "Bombay"; //
//   console.log(city); //Bombay
// }
// console.log(city); //Bombay

//let fruit = "apple";
// {
//   fruit = "orange"; //this will change the fruit to orange;
// }
// console.log(fruit); //orange

//You can use var before its declared
// fruit = "apple";
// var fruit;
// console.log(fruit); //apple //Allowed unlike let keyword

///*******Const keyword *///////////////////////////////////////
//Cannot redeclare and reassign
// const PI = 3.1413;
// PI = 3.14;// error cannot reassign

// //initialise when declared
// const age;
// age = 65;
// console.log(age);//error

// //Is block scoped like let
// const a = "apple",
//   b = "ball",
//   c = "car";
// console.log(a, b, c);
// c = "camel"; //Not allowed Error const assignment
// "use strict";
// // //Hoisting
// x = 25;
// var x;
// console.log(x); //25
// x = 23;
// console.log(x); //23

// y = 45;
// let y; //REference Error
// console.log(y); //can not Access y before initailization

// /////////Hoisting/////////////////////////////
// //variable can be used before its declared
// x = 25;
// console.log(x);
// var x;
// y = 45;
// console.log(y);
// let y; //error

// var a = "first";
// var b = "Second";
// var c = "third";
// console.log(a, b, c, d); //Error saying d is not defined

//But if we do the same thing and declare d with no value or initailisation then d will be undefined

// var a = "first";
// var b = "Second";
// var c = "third";
// console.log(a, b, c, d); //Now d is declared so d will show undefined
// var d;

// what if d has some value attach to it: Even in that case d will be undefined reason being it will only take the variable keyword and attach it to the top and not the value attached to it

// var a = "first";
// var b = "Second";
// var c = "third";
// console.log(a, b, c, d); //value is not shown here so d is undefined
// var d = "fourth";

// ////but what if d value is given even before console log
// var a = "first";
// var b = "Second";
// var c = "third";
// d = "forth";
// console.log(a, b, c, d); //now d has value forth
// var d;
// //this means we can use value d before declaring it with keyword var

//////////////////////////Let Hoisting/////////////////////
// let a = "first";
// let b = "Second";
// let c = "third";
// console.log(a, b, c, d); //Error saying d is not defined

//But if we do the same thing and declare d with no value or initailisation then d will be undefined

// let a = "first";
// let b = "Second";
// let c = "third";
// console.log(a, b, c, d); //Now d is declared so d will show undefined in case the keyword is var but with let keyword it will show error that d is not initalised
// let d;

//So let keyword doesnot allow to use the variable before it is declared

// let a = "first";
// let b = "Second";
// let c = "third";
// console.log(a, b, c, d);
// let d = "fourth"; //reference error

// // ////but what if d value is given even before console log
// let a = "first";
// let b = "Second";
// let c = "third";
// d = "forth";
// console.log(a, b, c, d); //now d has value forth
// let d;
// // //this means we cannot use value d before declaring it with keyword let
// //Hoiting with let keyword not allowed

///////////x.toString()method and x.toNumber()method

// let x = 5678;
// console.log(typeof x, x);//number
// let str = x.toString();
// console.log(typeof str, str);//string

// let str = "56787";
// console.log(typeof str, str); //string
// // let x = str.toNumber(); //toNumber is not a function
// // console.log(x, typeof x);
// //Instead use parseInt() method to convert string to an integer
// let num = parseInt(str);
// console.log(typeof num);
