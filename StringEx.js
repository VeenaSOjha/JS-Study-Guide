"use strict";
console.log("String Exercises");

//Exercise 1:
//Check whether an input is string or not. If its string returns true

//Solution:
// const is_String = (str) => {
//   return typeof str == "string" || str instanceof String;
// };
// console.log(is_String("Hello World"));
// console.log(is_String(1));
// console.log(is_String(new String("Hello")));

//Exercise 2:
//Check whether a string is blank or not. returns true if its blank

//Solution
// const is_Blank = (str) => {
//   if (str.length < 1) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(is_Blank(""));
// console.log(is_Blank("10"));
// console.log(is_Blank(10));

//Exercise 3
//Split a string and convert a string to an array of words

//Solution3
// const str2Arr = (str) => {
//   return str.split(" ");
// };
// console.log(str2Arr("Robin Singh"));

//Exercise 4
//Extract only specified number of characters, if num is not given extract whole

//Solution 4
// const trunc_String = (str, num) => {
//   if (typeof num === "undefined") {
//     return str;
//   } else {
//     return str.slice(0, num);
//   }
// };
// console.log(trunc_String("Robin", 4));
// console.log(trunc_String("Robin"));

//Exercise 5
//convert the last name in abbreivated form

//Solution 5
// const abb_lastName = (fullname) => {
//   let arr = fullname.trim().split(" ");
//   if (arr.length > 1) {
//     return arr[0] + " " + arr[1].charAt(0) + ".";
//   }
//   return arr + ""; //type coercion
// };
// console.log(abb_lastName("Robin Singh"));
// console.log(abb_lastName("Robin"));

//Exercise 6
//Hide Email address to protect

//Solution 6
// const hide_Email = (email) => {
//   let [name, domain] = email.split("@");
//   return name.charAt(0) + "*****" + name.charAt(name.length - 1) + "@" + domain;
// };
// console.log(hide_Email("robin@example.com"));

//Exercise 7
//Parameterise the string

//Solution 7:f
// const parameterise = (str) => {
//   let arr = str.split(" ");
//   return arr.join("-");
// };

// console.log(parameterise("Robin Singh From USA"));

//Exercise 8:
//Capitalise the first letter of String

//Solution 8:
// const capitalise = (str) => {
//   let string = str.trim();
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

// console.log(capitalise("   robin Singh"));

//Exercise 9:
//Capitalise the first letter of each word

//Solution 9
// const capitalise = (str) => {
//   let arr = str.split(" ");
//   let new_arr = [];
//   for (let word of arr) {
//     new_arr.push(word.charAt(0).toUpperCase() + word.slice(1));
//   }
//   return new_arr.join(" ");
// };

// console.log(capitalise("hello world"));

//Exercise 10
//Swap upper to lower and lower to upper

//Solution 10
// const swap = (str) => {
//   let arr = str.split("");
//   let new_arr = [];
//   for (let letter of arr) {
//     if (letter == letter.toLowerCase()) {
//       new_arr.push(letter.toUpperCase());
//     } else if (letter == letter.toUpperCase()) {
//       new_arr.push(letter.toLowerCase());
//     }
//   }
//   return new_arr.join("");
// };
// console.log(swap("hELLO"));

// const swap = (str) => {
//   let arr = str.split("");
//   let new_arr = [];
//   for (let letter of arr) {
//     letter === letter.toLowerCase()
//       ? new_arr.push(letter.toUpperCase())
//       : new_arr.push(letter.toLowerCase());
//   }
//   return new_arr.join("");
// };
// console.log(swap("hELLO"));

//Exercise 11:
//Convert a string to camel case

// //Solution 11:
// const camelize = function (str) {
//   return str.replace(/\W+(.)/g, function (match, chr) {
//     return chr.toUpperCase();
//   });
// };
// console.log(camelize("JavaScript Exercises")); //"JavaScriptExercises"
// console.log(camelize("JavaScript exercises")); //"JavaScriptExercises"
// console.log(camelize("JavaScriptExercises")); //"JavaScriptExercises"

//Exercise 12:
// Uncamelise

//Solution12
// function uncamelize(str, separator) {
//   // Assume default separator is a single space.
//   if (typeof separator == "undefined") {
//     separator = " ";
//   }
//   // Replace all capital letters by separator followed by lowercase one
//   var str = str.replace(/[A-Z]/g, function (letter) {
//     return separator + letter.toLowerCase();
//   });
//   // Remove first separator
//   return str.replace("/^" + separator + "/", "");
// }
// console.log(uncamelize("helloWorld"));
// console.log(uncamelize("helloWorld", "-"));
// console.log(uncamelize("helloWorld", "_"));

//Exercise 13
//concatenates a string n number of times

//Solution13:
// const concat = (str, n) => {
//   return str.repeat(n);
// };
// console.log(concat("hi ", 2));

// const concat2 = (str, n) => {
//   if (typeof n === "undefined") {
//     n = 1;
//   }
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(str);
//   }
//   return arr.join(" ");
// };
// console.log(concat2("hi", 2));
// console.log(concat2("hi"));

//Exercise 14:
//insert a sting at a given position

//Solution 14:
// const insert_string = function (str, newStr, position) {
//   if (typeof position == "undefined") {
//     position = 0;
//   }
//   if (typeof newStr == "undefined") {
//     newStr = "";
//   }
//   let updatedString = str.slice(0, position) + newStr + str.slice(position);
//   return updatedString;
// };
// console.log(insert_string("We are doing some exercises", "JS ", 18));
// console.log(insert_string("We are doing some exercises"));
