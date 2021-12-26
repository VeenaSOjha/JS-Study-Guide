// console.log("Conditions");

// //If else. else if
// //Switch
// //we know that getDay()method returns the number between 0 and 6
// //uses strict comparisions
// let x = new Date().getDay();
// console.log(x); //it is 6 as today is "Saturday"

// switch (x) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }
// console.log(day);

// //JS Loop For
// //run the same code over and over again each time with different value
// //normally works for arrays
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// //Using var in a loop
// var i = 5;
// for (var i = 0; i < 10; i++) {
//   console.log(i); //i will be 1 to 9 in loop
// }
// console.log(i); //value of i will be 10

// //Using let in a loop
// let i = 5;
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i); //5

/////////////////For In Loops/////////////////////////////////////////
//Iterates over object
//Each iteration returns value of key obj[key]
// let person = { fname: "Veena", lname: "Singh", age: 38 };
// for (let x in person) {
//   console.log(person[x]); //here x is the property
// }
// //We can also use it in array
// const numbers = [45, 4, 9, 16, 25];
// for (let x in numbers) {
//   console.log(numbers[x]);
// }

// let something = numbers[3]; //so here x is index
// console.log(something);
//But its better to use
//for loop or for of loop or Array.forEach() method iteration

/////////////////////For Of loop//////////////////////////////////
// const cars = ["BMW", "Volvo", "Mini"];
// for (let x of cars) {
//   console.log(x);
// }
// //Can also loop over a string
// let language = "JavaScript";
// for (let x of language) {
//   console.log(x);
// }

/////////////////////The While Loop///////////////////////////////
//loops as long as condition is true
// i = 0;
// // while (i < 10) {
// //   console.log(i);
// //   i++;
// // }

// //Do while loop
// do {
//   console.log("hello " + i);
//   i++;
// } while (i < 10);

////////Break and continue
//loop with break statement gets out of the code block
// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

//Result : 0 to 3 will break at 4

// //Continues comes out of only one iteration and then continues
// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     continue;
//   }
//   console.log(i);
// }
// //REsult : 0 t0 9 but no 4 will skip 4

// ///////////practice Switch
// let day = 4;
// console.log(day);

// switch (day) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "wow";
//     break;
//   case 5:
//   case 6:
//     day = "Weekend";
// }
// console.log(day);
//////////Practice arrays for loop

//const fruits = ["apple", "banana", "cherry", "Kiwi", "orange"];
// // // //instead of writing
// // // // console.log(fruits[0]);
// // // // console.log(fruits[1]);
// // // // console.log(fruits[2]);
// // // // console.log(fruits[3]);
// // // // console.log(fruits[4]);
// // // // //We can do the same thing with loop
// // // //We know the length of the arr fruits which is 5
// // for (let i = 0; i < fruits.length; i++) {
// //   console.log(fruits[i]);
// //}
// //here i starts with 0 and second condition is exit condition so when i is no longer less than 5 it will stop executing and last condition is to increment the i

// //we can also reverse this
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// ////////////For in loop////////////////////////////////
///loops thru prop of an object
// // for(key in object){}

// const person = {
//   "Full name": "Veena",
//   job: "Js Devloper",
//   age: 40,
// };

// for (keys in person) {
//   console.log(person[keys]);
// }

// //For in can also loop over array
// arr = [2, 4, 6, 8, 10];
// for (indexes in arr) {
//   console.log(arr[indexes]);
// }
///but as we know the order of array is imp so it is better touse
//for loop, for of loop or Array.forEach() method for Arrays

///////Forof loop loops thru any iterable

// const text = "Hello";
// for (let x of text) {
//   console.log(x);
// }
// const arr = [2, 4, 6, 8];
// for (let x of arr) {
//   console.log(x);
// }
// // const obj = {
// //   name: "Veena",
// //   age: "40",
// //   job: "JS Developer",
// // };
// // for (let x of obj) {
// //   console.log(x);
// // }
// //////Errror: Obj is not iterable

// /////So all about loops/////////////////////////////////////////
// //The first loop is for loop that is used with 3 conditions
// const arr = [2, 4, 6, 8];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]); //2 4 6 8 //here i is the index
// // }
// //The second loop is for in loop which is best suited for objects
// const person = {
//   name: "Veena",
//   age: 40,
//   job: "Js Developer",
// };
// // for (let x in person) {
// //   console.log(person[x]);//here x is keys
// // }
// //This can also be used in array but not recommended if the order of array is imp use for of loop instead
// //Third loop is for of loop
// for (let x of arr) {
//   console.log(x); //here x is values//
// }
// //This for of loop works for any iterable like string but not object

/////The While loop
//first define the var
// let i = 0;
// while (i < 10) {
//   //when this condition is false this code wont execute
//   console.log(i);// 0 to 9
//   i++;
// }
//Reverse can also be done
// let i = 10;
// while (i > 0) {
//   console.log(i); //10 to 1
//   i--;
// }

///////Do while will run once no matter what then will check the condition
// let i = 0;
// do {
//   console.log(i); //0 to 9
//   i++;
// } while (i < 10);

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i > 0);
