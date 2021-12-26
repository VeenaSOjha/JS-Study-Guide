console.log("All about Arrays");

// //To create an array
// let num = [12, 23, 45, 65];
// let num1 = [1, 2, 4, 5, 6];
// let num2 = new Array(9, 87, 666, 3456);//4 elements
//let num3 = new Array(40);//40 empty elements

// //Accessing array Elements
// const cars = ["Saab", "Volvo", "BMW"];
// let x = cars[0];
// console.log(x); //Saab
// //change the element
// cars[0] = "Opel";
// console.log(cars[0]); //Opel

//type of Arrays are Objects
//elements can be objects

//////////////Array Properties and Methods/////////////////
// let cars = ["Saab", "Opel", "Volvo"];
// console.log(cars.length); // Returns 3 as 3 elements
// console.log(cars);

// //arr.push()
// let arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);
// arr[arr.length] = 6;
// console.log(arr);

// // //To check if its an array
// let bool = Array.isArray(arr); //retruns true
// console.log(bool);
// let vool = arr instanceof Array;
// console.log(vool); //true

// //Converting Arrays to Strings
// const fruits = ["banana", "apple", "orange", "mango"];
// //Join Method
// //toString Method
// const newfruit = fruits.join(" *");
// console.log(newfruit);
// const arrFruit = fruits.toString();
// console.log(arrFruit);

//Popping and Pushing
//pop() :  removes the last element and returns the popped one
// const fruits = ["Apple", "Banana", "Cherry", "Fig", "Guava"];
// const newFruit = fruits.pop(); //Guava
// console.log(fruits); //Apple Banana Cherry Fig
// console.log(newFruit); //Guava

// //push() : adds last element
// const p = fruits.push("Mango");
// console.log(fruits);
// console.log(p);// returns 6

//shift(): removes first element
// const a = fruits.shift(); //returns apple
// console.log(fruits); //apple
// console.log(a); //Apple

//Unshift():adds the first element
// const a = fruits.unshift("Grapes");
// console.log(fruits);
// console.log(a);//returns 6

/////////////////arr.splice//////////////
//add new items to an array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1, 0, "Lemon", "Kiwi");
// //at index 1 remove 0 elements and add the rest of param eg lemon and kiwi
// console.log(fruits); //[Banana, Lemon, kiwi, Orange, Apple, Mango]
// //We can also use splice method to remove elements without leaving undefined holes
// fruits.splice(3, 2); //this means we are not adding any elements but at index 3 remove 2 elements
// console.log(fruits); //[Banana, Lemon, Kiwi, Mango]

///////////arr.concat/////////////////////////////////////////
// const boys = ["Veeraj", "Mike", "Jordon"];
// const girls = ["Ira", "Ishi"];
// const all = boys.concat(girls);
// console.log(all);
// //Please note concat doesnot change original array and returns new array
// //concat can take many arguments and strings too
// const boysGirls = boys.concat(girls, "Samantha");
// console.log(boysGirls);

/////////arr.Slice//////////////////////////////////////////
//Slice method creates new array and doenot change the source array
//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const newfruit = fruits.slice(1);
// console.log(fruits); //remains same
// console.log(newfruit); //[Orange, Lemon, Apple, Mango]
// const newfruit2 = fruits.slice(3);
// console.log(newfruit2); //[Apple, Mango]
//const newfruit3 = fruits.slice(1, 3);
//console.log(newfruit3); //starts at index 1 and doesnot include 3

//////////arr.sort()////////////////////////////////////////////
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits); //arranges alphabateically
// //[Apple', 'Banana', 'Mango', 'Orange']]
// fruits.reverse();
// //['Orange', 'Mango', 'Banana', 'Apple']
// console.log(fruits);

////Numeric sort()///////////////////////////////////////////////
//use sort function when sorting numbers
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) {
//   return a - b;
// }); //ascending
// console.log(points); //[1, 5, 10, 25, 40, 100]
// points.sort(function (a, b) {
//   return b - a;
// }); //descending
// console.log(points); //[100, 40, 25, 10, 5, 1]

// //to find the lowest value after descending order
// const lowest = points[points.length - 1];
// console.log(lowest); //100

//////////////Array Iteration//////////////////////////////////////////
//forEach()
//forEach method and returns callback function which will be given three parameters value, index and array
// const numbers = [45, 4, 9, 16, 25];
// // numbers.forEach(consoleItem);

// // function consoleItem(item, index, arr) {
// //   console.log(`${item} is at index ${index} `);
// // }

// //or we can write the same thing in arrow function
// numbers.forEach((item, index, arr) => {
//   console.log(`${item} is at index ${index}`);
// });

// //Usage of forEach((item, index, arr)=>{}) can be used to calculate the sum
// let sum = 0;
// numbers.forEach((item, index) => {
//   sum += item;
// });
// console.log(sum); //99

// //how many times a particular thing has appeared in array
// const letters = ["a", "b", "a", "b", "b", "c", "d", "d"];

// let count = {}; //empty object

// letters.forEach((item) => {
//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }
// });
// console.log(count);

// /////Array.map()
// //Creates a new array and does not change the source array
// const numbers1 = [45, 4, 9, 16, 25];
// //perform multiplication on each element
// numbers1.map(function (item, index, array) {
//   console.log(item * 2);
// });

// ///Array.filter();
// //filter method creates a new array with array elements that passes a test
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(function (item, index, arr) {
//   console.log(item > 18);
//   return item > 18;
// });

// console.log(over18); // [45, 25]

//
//arr.reduce() method works left to right and takes 4 parameters
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(function (total, item, index, arr) {
//   return total + item;
// });

// console.log(sum); //99

// //resuce method can accept initial value
// let sumTotal = numbers.reduce(function (total, item, index, arr) {
//   return total + item;
// }, 100);

// console.log(sumTotal); //199
// //Similar to this is reduce right which works from right to left

// //Array.every() checks each element and returns true or false if all are met
// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(function (item, index, arr) {
//   return item > 18;
// });

// console.log(allOver18); //false

// //Array.some()
// const numbers = [45, 4, 9, 26, 25];
// let someOver18 = numbers.some(function (item, index, arr) {
//   return item > 18;
// });
// console.log(someOver18); //true as some are above 18

// //Array.indexOf() and last index of just like strings returns its position
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple");
// console.log(position); //0
// //returns -1 if nothing is found

//Array.includes() returns true or false

// //Array.find() returns the first element that passes the function condition

// const numbers = [45, 9, 16, 25, 29];
// let first = numbers.find(function (item, index, arr) {
//   return item > 18;
// });
// console.log(first); //45

// //Array.findIndex() returns the first element that passes the function condition

// const numbers = [45, 9, 16, 25, 29];
// let first = numbers.findIndex(function (item, index, arr) {
//   return item > 18;
// });
// console.log(first); //0

//Array.from() return array from any object
//Array.from("ABCDEFG"); //REturns [A , B, C, D, E, F, G]

// //Array.Keys()
// const fruits = ["Banana", "Orange", "Mango"];

// for (let x of fruits.keys()) {
//   console.log(x); // iterable 0 , 1, 2
// }

//Array Static methods
//The array class contains static methods that can be used in constructing or determining an array

//Array.from()
//Array.of()
//Array.isArray()

// //Creates a new Array from another array, iterable object or array-like object
// console.log(Array.from("123")); //returns ['1','2', '3']
//console.log(Array.from("HelloWorld")); //converts string to Array

// //Creates an array instance from an idefinite number of arguments
// console.log(Array.of("Hello", "Hi", "Bye")); //returns 3 elem

// //Array.isArray()
// const fruits = ["apple", "Banana", "Cherry"];
// console.log(Array.isArray(fruits)); //true

//////////////////////////////////////////////////////////////////////////
//Excercise 1:
//input is an array or not

//Solution 1:
// const is_array = function (input) {
//   return Array.isArray(input);
// };

// console.log(is_array([12, 12, 34, 54]));
// console.log(is_array("Hello"));
// console.log(is_array(new Array(12, 12, 34, 54)));

const myFunction = (arr) => {
  return arr.reduce((result, current) => {
    return (result = current);
  }, 10);
};

console.log(myFunction([10, 10]));
console.log(myFunction([]));
