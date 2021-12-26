"use strict";
console.log("All about Functions");

//Function Invocation
//When event occurs (user clicks button)
//Invoked or called from Js code
//Self Invoked

//Function stops executing as soon as js reaches return statement
// function myFunction(a, b) {
//   return a * b;
// }
// let x = myFunction(3, 4);
// console.log(x); //Value of x will be 12

// //Used to reuse the code
// function toCelsius(f) {
//   return (5 / 9) * (f - 32);
// }
// let f = toCelsius(77);
// console.log(f); //25
// let fg = toCelsius(80);
// console.log(fg); //26.66
// let text = "Today temprature is " + toCelsius(75) + "celsius";
// console.log(text);

// //function scoped
// function myFunction() {
//   let carName = "Volvo";
//   var someVar = "hi";
//   return (text = "My car is " + carName);
// }
// console.log(someVar); //Reference Error
// // console.log(carName); //Error as car Name is not defined

//How function behave when the object passes to the function
// var myCar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };

// var x, y;
// function myFunc(theObject) {
//   theObject.make = "Toyota";
// }

// y = myCar.make;
// console.log(y); //"honda"//remains same before calling the function

// myFunc(myCar); //called the function here

// x = myCar.make;
// console.log(x); //"Toyota"//Now the value is changed

//how function behaves when the primitive value is passed to function
// let num1 = 65;
// function add(x, y) {
//   num1 = x + y;
//   return num1;
// }
// let a = add(num1, 20);
// console.log(a); //85
// console.log(num1); //85

//Function Expression
//we can actually give function a name too
// const square = function (number) {
//   return number * number;
// };
// console.log(square(4));
//This will produce the same result
// const square = function sq(number) {
//   return number * number;
// };
// console.log(square(4));
//Benefits of Function Expression
//>> providing a name like above ex makes the function easier to identify in stack traces
//>> is convenient when passing the function as an argument to another function

// function map(f, a) {
//   let result = []; //create a new array
//   let i;
//   for (i = 0; i != a.length; i++) result[i] = f(a[i]);
//   return result;
// }

//function receives the function f as an argument

//for loop
// for (let step = 0; step < 5; step++) {
//   console.log(step);
// }

// function map(fun, arr) {
//   let result = []; //empty array
//   let i;
//   for (i = 0; i < arr.length; i++) result[i] = fun(arr[i]);
//   return result;
// }

// const fun = function (x) {
//   return x * x;
// };

// // console.log(fun(3));//27

// let numbers = [0, 1, 2, 5, 10]; //array with 5 elems
// let cube = map(fun, numbers);
// console.log(cube);

// let numbers = [0, 1, 2, 3, 4];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

//Example
//first create an array and multiply each element with 5
// const numArr = [2, 5, 6, 8];
// //now define a function which takes a number and multiplies that number with 5
// const fun = function (x) {
//   return x * 5;
// };
// //now defined another function which takes array and function as parameter and loop through it till all the numbers in array are multiplied by 5
// //The result should be [10, 25, 30, 40]
// function multiply5(f, arr) {
//   let results = []; //create an empty array where the result needs to be stored
//   for (let i = 0; i < arr.length; i++) {
//     results[i] = f(arr[i]);
//     //fun is a function which is simply taking a number arr[i] as a parameter
//   }
//   return results;
// }
// const m = multiply5(fun, numArr);
// console.log(m);

//Example
//Create a function which will multiply any array elem to 7 and will give the result

// //These will be parameters in our functions
// let numArr = [2, 3, 4, 5, 6];
// let multiply7 = function (x) {
//   return x * 7;
// };
// let multiply8 = function (x) {
//   return x * 8;
// };

// //Define a function that will take an array and function as parameter
// //We can loop through array by using the following function

// function arrProduct(arr, fun) {
//   let resultsArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     resultsArr[i] = fun(numArr[i]);
//   }
//   return resultsArr;
// }

// const p = arrProduct(numArr, multiply7);
// console.log(p);
// const q = arrProduct(numArr, multiply8);
// console.log(q);

//Arguments in functions can be objects and arrays and functions, and primitive values

//A function can call itself
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// // console.log(factorial(3)); //3*2 = 6
// console.log(factorial(4)); //4 * 16 (4-1)

//Higher order function
// const firstFun = function (x) {
//   return function (y) {
//     return x * y;
//   };
// };

// console.log(firstFun(10)(5));//50

// const firstFun = function (x) {
//   return (y) => x * y;
// };
// console.log(firstFun(10)(5));

//Closure

// function createScoreFunction() {
//   let scores = [];
//   return function (score) {
//     scores.push(score);
//     console.log(scores.length);
//     console.log(scores);
//   };
// }

// const addScore = createScoreFunction();
// addScore(25);
// addScore(90);
// addScore(100);
