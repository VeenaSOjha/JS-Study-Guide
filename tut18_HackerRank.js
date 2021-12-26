// "use strict";

// /**
//  *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
//  *   Print three lines:
//  *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
//  *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
//  *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
//  *
//  *	Parameter(s):
//  *   secondInteger - The string representation of an integer.
//  *   secondDecimal - The string representation of a floating-point number.
//  *   secondString - A string consisting of one or more space-separated words.
//  **/
// function performOperation(secondInteger, secondDecimal, secondString) {
//   // Declare a variable named 'firstInteger' and initialize with integer value 4.
//   const firstInteger = 4;

//   // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
//   const firstDecimal = 4.0;

//   // Declare a variable named 'firstString' and initialize with the string "HackerRank".
//   const firstString = "HackerRank ";

//   // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
//   console.log(parseInt(firstInteger) + parseInt(secondInteger));
//   let c = parseInt(firstInteger) + parseInt(secondInteger);
//   console.log(c, typeof c);
//   let d = Number(firstInteger) + Number(secondInteger);
//   console.log(d, typeof d);
//   console.log(c === d);

//   console.log(Number(firstInteger) + Number(secondInteger));

//   // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
//   console.log(parseFloat(firstDecimal) + parseFloat(secondDecimal));

//   // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
//   console.log(firstString + " " + secondString);
// }

// performOperation("20", "3.5", "Hello");

//In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.
// Task
// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
// function vowelsAndConsonants(s) {
//   let vowels = "aeiou";
//   for (let x of s) {
//     //console.log(x);
//     if (vowels.search(x) !== -1) {
//       console.log(x);
//     }
//   }

//   for (let x of s) {
//     if (vowels.search(x) == -1) {
//       console.log(x);
//     }
//   }
// }
// vowelsAndConsonants("JavaScript");

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(4));
///////////////////////////////////////////////////////////////////
// const PI = Math.PI;

// function main() {
//   const PI = Math.PI;
//   let r = Number(readLine());

//   console.log(PI * Math.pow(r, 2));
//   console.log(PI * 2 * r);
// }

// console.log(main(2.6));
///////////////////////////////////////////////////////////////////
//Gr A = score between 30 to 25
// funcf
