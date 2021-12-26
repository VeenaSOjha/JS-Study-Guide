//"use strict";
console.log("Exercises from W3resources");
//Fundamental (150 exercises)

//1>> Compare 2 objects to determine if the first one contains the equivalent prop values to second one
//https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-1.php

//2>> Write a prog to copy a string to a clipboard
//https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-2.php

//3>>
////////////////////////////////////////////////////////////////////////

//Functions (29 Excercises)
//--------------------------------------------------------------------
//1>>Function that reverses the number

//let num = 123456;

// //first convet num to a string
// let str = num + "";
// let str1 = String(num);
// let str2 = num.toString();
// console.log(typeof str, str); //string

// //second we need the convert string to an array of strings
// let arr = str.split("");
// console.log(arr); //['1', '2', '3', '4', '5', '6']

// //third the array has reverse method
// let reverseArr = arr.reverse();
// console.log(reverseArr); //['6', '5', '4', '3', '2', '1']

// //now convert the array into string using join method
// let reverseStr = reverseArr.join("");
// console.log(reverseStr);

//practice 1

// let num = 987654321;

// let str = String(num); //convert num to string
// let arr = str.split(""); //convets string to array
// let revArr = arr.reverse(); //reverses the array
// let revStr = revArr.join(""); //convers array to string
// console.log(revStr);
// //Another faster way to do it
// let revStr2 = String(num).split("").reverse().join("");
// console.log(revStr2);

//Now write a function to reverse it

// const reverseFunct = (num) => String(num).split("").reverse().join("");
// console.log(reverseFunct(12345));

//We can also reverse a string with the help of for loop

// const reversedString = (str) => {
//   let finalStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     //console.log(str[i]);
//     finalStr += str[i];
//   }
//   return finalStr;
// };

// console.log(reversedString("Sorry"));
//--------------------------------------------------------------------------
//Write a function that checks whether a passed string is palindrome or not?
//We need to check if the word reads the same backwards

//So we know if the string reversed matches the orignal string it will be true

// const palindrome = (str) => {
//   let reversed = str.split("").reverse().join("");
//   console.log(reversed);
//   if (reversed === str) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(palindrome("madam"));

// //The above function will fail if we check with _ or spaces
// console.log(palindrome("race car")); //false
// console.log(palindrome("Madam")); //false
// console.log(palindrome("*bakkab"));
// //So to make it right we need to convert everthing to lowercase
// //we need to replace all non alpha charcters

// let s = "Beast_12#4$*";
// let reg = /[\W_]/g;
// let lowerCaseStr = s.toLowerCase().replace(reg, ""); //replace reg with nothing
// console.log(lowerCaseStr);

//Correct way to write a palindrome function
// const palindrome = (str) => {
//   let reg = /[\W_]/g;
//   let replaced = str.toLowerCase().replace(reg, "");
//   let reversed = replaced.split("").reverse().join("");
//   if (reversed === replaced) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(palindrome("Madam"));
// console.log(palindrome("123321"));

//-------------------------------------------------------------------------
//Function that generates all combinations of string
// const combination = (str) => {
//   //first create an empty array
//   let listOfStrings = [];
//   //now loop through the str parameter where i=0; and i is less than string length
//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i]); //d o g
//     for (let j = i + 1; j < str.length + 1; j++) {
//       console.log(j); //d 1 2 3
//       //o 2 3
//       //g 3
//       listOfStrings.push(str.slice(i, j));
//     }
//   }
//   return listOfStrings;
// };

// console.log(combination("dog"));

//We can solve this using different method
// let str = "dog";
// let permutation = (str, result) => {
//   if (str.length == 0) {
//     console.log(result);
//   }
//   for (let i = 0; i < str.length; i++) {
//     let rest = str.substring(0, i) + str.substring(i + 1);
//     permutation(rest, result + str[i]);
//   }
// };

// console.log(permutation(str, ""));

// ///////////////////////////////////////
// let permutation = (str, result) => {
//   if (str == 0) {
//     console.log(result);
//   }
//   for (let i = 0; i < str.length; i++) {
//     let rest = str.substring(0, i) + str.substring(i + 1); //oy//by//bo
//     //console.log(rest); //empty+oy//b + y//b + o
//     permutation(rest, result + str[i]); //oy,b//by,o//bo,y
//     //console.log(result + str[i]);
//   }
// };

// console.log(permutation("boy", ""));

// let word = "boy";

// console.log(word.substring(0, 0)); //empty value
// console.log(word.substring(0, 1)); //b
// console.log(word.substring(0, 2)); //bo

// console.log(word.substring(0 + 1)); //oy
// console.log(word.substring(1 + 1)); //y
// console.log(word.substring(2 + 1)); //empty value

// // console.log(word.substring(0, 0) + word.substring(1)); //oyb
// // console.log(word.substring(0, 1) + word.substring(2)); //byo
// // console.log(word.substring(0, 2) + word.substring(3)); //boy
//-------------------------------------------------------------------------

//Put any word in alphabetical order
// const order = (str) => str.toLowerCase().split("").sort().join("");
// console.log(order("JavaScript"));

//-------------------------------------------------------------------------

//Function that converts first letter if each word of string in UpperCAse'

// const sentence = "the quick brown fox";
// const arr = sentence.split(" "); //split by space ["the", "quick"]
// console.log(arr[1].charAt(0)); //to access the first character

// const uppercase = (str) => {
//   let splitArr = str.split(" ");
//   let arr = [];
//   for (let i = 0; i < splitArr.length; i++) {
//     let upperFirstLetter = splitArr[i].charAt(0).toUpperCase();
//     arr.push(splitArr[i].charAt(0).toUpperCase() + splitArr[i].slice(1));
//   }
//   return arr.join(" ");
// };
// console.log(uppercase("munroe is the best"));

//-------------------------------------------------------------------------

//Find the longest word of the given string

// const findLongest = (sentence) => {
//   let arr = sentence.split(" ");
//   let longest = "";
//   console.log(arr);
//   for (let word of arr) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// };

// console.log(findLongest("My favorite color is blue"));

// //another way to do it
// const findLongWord = (sentence) =>
//   sentence.split(" ").sort((a, b) => b.length - a.length); //[0];
// console.log(findLongWord("I love cooking so much"));

//--------------------------------------------------------------------------
//Practice again
//reverse function that reverses a number
// let num = 12345678;
// const reverseFunct = (num) => String(num).split("").reverse().join("");
// console.log(reverseFunct(num));
// console.log(reverseFunct("MadaM"));

//palindrome function that checks if given string is palindrome
// const palindrome = (str) => {
//   let newStr = str.toLowerCase().replace(/[\W_]/g, "");
//   let strReverse = newStr.split("").reverse().join("");
//   if (strReverse === newStr) {
//     return `${strReverse} is equal to ${newStr}`;
//   } else {
//     return `${strReverse} is not equal to ${newStr}`;
//   }
// };
// let isPalindrome = palindrome("Madam");
// isPalindrome = palindrome("race car");
// isPalindrome = palindrome("race_car");
// console.log(isPalindrome);

//order function that returns any string in alphabetical order
// const alphaOrder = (str) => str.toLowerCase().split("").sort().join("");
// console.log(alphaOrder("JavaScript"));

//FindLongest function that returns the longest word in a given sentence
// let sentence = "The Quick Brown Fox Jumped over the moon";
// const findLongest = (sentence) => {
//   let longest = ""; //create an empty bucket to store the longest word
//   let wordsArr = sentence.split(" ");
//   for (let word of wordsArr) {
//     //console.log(word);
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// };
// const longestWord = findLongest(sentence);
// console.log(longestWord);

//Another way to do it which will give words in descending order
// const findLongest = (sentence) =>
//   sentence.split(" ").sort((a, b) => b.length - a.length);
// console.log(findLongest("The quick brown fox jumped over the moon"));
//now its easy to find the longest too
// const findLongest = (sentence) =>
//   sentence.split(" ").sort((a, b) => b.length - a.length)[0];
// console.log(findLongest("The quick brown fox jumped over the moon"));
// //we can also find the last one
// const findShortest = (sentence) => {
//   let splitArr = sentence.split(" ").sort((a, b) => b.length - a.length);
//   return splitArr[splitArr.length - 1];
// };
// console.log(findShortest("The quick brown fox jumped over the moon"));

//Uppercase function that converts the first word of any sentence in upperCase
// const uppercase = (sentence) => {
//   let arr = sentence.split(" ");
//   let newArr = []; //empty bucket to push new words
//   for (let word of arr) {
//     //console.log(word);
//     //Access the first word using charAt(0)
//     newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
//   }
//   return newArr.join(" ");
// };
// console.log(uppercase("the quick brown fox jumps over the lazy dog"));
// //The Quick Brown Fox Jumped Over The Lazy Dog

//Permutation function that returns all combination of string
//Full Explanation
//lets take a word dog
//1>> put one word at a time in our memory
//d
//o
//g
//2>> to make 3 letter word lets take 2 remaining words
//d + og //d + go
//o + dg //o + gd
//g + do //g + od
//So now we have 6 permutations

//Summary of what we are doing
//iterating thru one letter at a time
//iterating thru the remaining or rest of the letters

//Recursion :
// //base case should be when are string is empty '0'return "";
// //base case should be when are string is 1 return str;

// //Create an empty array

// function findPerms(str) {
//   if (str.length === 0) return "";
//   if (str.length === 1) return str;

//   let result = [];

//   for (let i = 0; i < str.length; i++) {
//     const currentChar = str[i]; //"d" // "o" //"g"
//     const restChar = str.slice(0, i) + str.slice(i + 1); //"og"//"dg"//"do"

//     //console.log(restChar, currentChar);
//     for (let j = 0; j < restChar.length; j++) {
//       //console.log(currentChar);//"d" //"o"//"g" 2 times
//       //console.log(restChar[j]); //"o g"//"d g"/"d o"

//       result.push(currentChar + findPerms(restChar)[j]);
//     }
//   }
//   return result;
// }

// console.log(findPerms("dog"));

// let word = "dog";
// console.log(word.slice(0, 0) + word.slice(1)); //"" + og
// console.log(word.slice(0, 1) + word.slice(2)); //d + g
// console.log(word.slice(0, 2) + word.slice(3)); //do + ""

//Practice

//reverse function that reverses the number
// const num = 12345;
// const reverseFunct = (num) => String(num).split("").reverse().join("");
// console.log(reverseFunct(num)); //54321

//palindrome function that checks if the given string is palindrome or not
// const str = "race car";
// const palindrome = (str) => {
//   let newStr = str.toLowerCase().replace(/[\W_]/g, "");
//   if (newStr == newStr.split("").reverse().join("")) return true;
//   else {
//     return false;
//   }
// };
// console.log(palindrome(str));

//Permutation of string
//const string = "dog";
// const permutation = (str) => {
//   if (str.length === 0) return "";
//   if (str.length === 1) return str;
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i];
//     let restChar = str.slice(0, i) + str.slice(i + 1);
//     for (let j = 0; j < restChar.length; j++) {
//       result.push(currentChar + permutation(restChar)[j]);
//     }
//   }
//   return result;
// };
// console.log(permutation("one"));

//letters in alphabetical order
// let str = "Javascript";
// const order = (str) => str.toLowerCase().split("").sort().join("");
// console.log(order(str));

//TitleCase first letter in sentence
// const titleCase = (sentence) => {
//   let arr = sentence.split(" ");
//   let newArr = []; //to hold new values
//   for (let words of arr) {
//     // console.log(words);
//     newArr.push(words[0].toUpperCase() + words.slice(1));
//   }
//   return newArr.join(" ");
// };
// console.log(titleCase("the quick brown fox jumps over the lazy dog"));

//Find the longest string in sentence
// const findLongest = (sentence) => {
//   const arr = sentence.split(" ");
//   let longest = "";
//   for (let words of arr) {
//     //console.log(words);
//     if (words.length > longest.length) {
//       longest = words;
//     }
//   }
//   return longest;
// };
// console.log(findLongest("hello hi Namaste"));

////////////////////////////////////////////////////////////////////////////////
//New Excercises
//Accepts the string as parameter and counts the number of vowels in the string
// const vowelCount = (str) => {
//   let vowelList = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]); //;loop through each word
//     //console.log(vowelList.indexOf(str[i])); //if word is not in vowellist returns -1
//     if (vowelList.indexOf(str[i]) !== -1) {
//       count += 1;
//     }
//   }
//   return count;
// };
// console.log(vowelCount("The quick brown FOxes"));

//Note : How indexof(0) is used
// const str = "Hello World";
// const index_of_str = str.indexOf("W");//index of takes a parameter and checks if it is in given string if not it returns -1
// console.log(index_of_str);

//In this case we have list of vowels
// let vowellist = "aeiouAEIOU";
// let randomString = "Where is your house located?";
// let index_of_str = vowellist.indexOf("z"); //we need to check vowellist with randomstring that means if the vowellist doesnot have the given letter than it will return -1
// console.log(index_of_str); //-1 as z is not there
// //we are looping through each word in random string and if the letter is not found it will return -1 so we need to just keep on adding the +1 when it is not returning -1
// const vowelCount = (str) => {
//   let vowellist = "aeiouAEIOU";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i]);//letters of string
//     if (vowellist.indexOf(str[i]) !== -1) {
//       count += 1;
//     }
//   }
//   return count;
// };
// console.log(vowelCount("BigABSJones"));

//Test Prime Number
// const isPrime = (num) => {
//   let res;
//   if (num === 1) {
//     return (res = `${num} is neither Prime nor composite `);
//   } else if (num < 1) {
//     return (res = `${num} is less than 1 so its 0 or negative number`);
//   } else {
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         res = `${num} is not a prime number`;
//         break;
//       } else {
//         res = `${num} is a prime number`;
//       }
//     }
//   }
//   return res;
// };
// console.log(isPrime(7));

// //function that detect datatypes
// // const detectDataType = (value) => {
// //   let dtypes = [Function, RegExp, Number, String, Boolean, Object];
// //   let x;
// //   let len;

// //   if (typeof value === "object" || typeof value === "function") {
// //     for (x = 0, len = dtypes.length; x < len; x++) {
// //       if (value instanceof dtypes[x]) {
// //         return dtypes[x];
// //       }
// //     }
// //   }
// //   return typeof value;
// // };

// // console.log(detectDataType(12));
// // console.log(typeof {});
// let x = function () {
//   return "hello";
// };
// const detectDT = (value) => typeof value;
// const newStr = new String("Hello");
// console.log(newStr instanceof String);
// console.log(newStr instanceof Object);
// console.log(detectDT(12));
// console.log(detectDT(newStr)); //object
// console.log(detectDT(x));

//Function that returns the n rows by n columns

//function to find second largest number in array

// const get_largest = (arr) => {
//   let largest = "";
//   let secondlargest = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondlargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondlargest) {
//       secondlargest = arr[i];
//     }
//   }
//   return secondlargest;
// };

// console.log(get_largest([12, 34, 54, 123, 23, 0]));

//find the lowest number in array
// const find_lowest = (arr) => {
//   let lowest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < lowest) {
//       lowest = arr[i];
//     }
//   }
//   return lowest;
// };
// console.log(find_lowest([2, 45, -6, 1, 7]));

//Find the second largest without sort function
// const find_second_largest = (arr) => {
//   let largest = ""; //49
//   let secondLargest = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       //12>""
//       secondLargest = largest; //12
//       largest = arr[i]; //49
//     } else if (secondLargest < arr[i]) {
//       //arr[2]
//       secondLargest = arr[i]; //32
//     }
//   }
//   console.log(largest); //49
//   return secondLargest;
// };

// console.log(find_second_largest([12, 49, 32, 47]));

///////////////////////////////////////////////////////////////////////
//find the second largest and second smallest number with sort function

// const find_second_largest_smallest = (arr) => {
//   let sorted = arr.sort((a, b) => a - b);
//   let second_smallest = sorted[1];
//   let second_largest = sorted[arr.length - 2];
//   console.log(sorted);
//   return [second_largest, second_smallest];
// };
// console.log(find_second_largest_smallest([12, 23, 32, 31, 45, 9, 4]));

///////////////////////////////////////////////////////////////////////
//function that returns the function name
// function helloWorld() {
//   console.log(arguments.callee.name);
// }
// helloWorld();

//function that has function as a parameter
// function addStudent(st, callbackFunct) {
//   callbackFunct();
// }
// function refresh() {
//   console.log("Hello");
// }
// addStudent(1, refresh);
