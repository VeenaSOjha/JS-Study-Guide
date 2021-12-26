console.log("JS strings");
/*
//In JS strings can be primitive or object//////////////////////////
// //Strings can be objects
// let fName = "Veena Singh";
// let fullName = new String("Veena Singh");
// console.log(fName, typeof fName); //Veena singh String
// console.log(fullName, typeof fullName); // Veena Singh Object

// // //use operator
// console.log(fName == fullName); //true
// console.log(fName === fullName); //false

// // //objects can not be compared
// //object can not be compared with object but string and obj canbe compared
// let myName = new String("Veena Singh");
// console.log(myName == fullName); //false
/*

/*
// console.log("String Methods and Properties");

//1. string.length/////////////////////////////////////////////////////
// let text = "abcdefghijklmnopqrstuvwxyz";
// console.log(text.length); //26
*/
//2.Extracting string/////////////////////////////////////////////////
//Slice and substring are same but slice can accept minus values
//a))Slice(start, end)
//>>Extracts part of string and returns the extracted part in a new string
//let str = "Apple,*Banana,*Kiwi";
// // let newStr = str.slice(7, 13);
// // console.log(str); //same as above//does not change
// // console.log(newStr); //Banana

// let newStr1 = str.slice(-12, -6);
// console.log(newStr1); // Banana

//let sliced = str.slice(7); //
//console.log(str.slice(-12)); // will give the same result
//console.log(sliced); //Banana Kiwi

//b))Substring(start, end)//does nt accept minus value
// let str = "Apple, Banana, kiwi";
// let newStr = str.substring(7, 13);
// console.log(str); //same and doesnot change
// console.log(newStr); //Banana

//c))substr() method is similar to slice()
//the second method specifies the length of the ex part
// let str = "Apple, Banana, Kiwi";
// let newStr = str.substr(7, 6); //starts with 7 and returns 6 char

///////////3.Extracting String Char///////////////////////////////
//1))charAt(position)
// let text = "HELLO WORLD";
// text.charAt(0); //REturns H
//returns empty string if nothing is found

//2))charCodeAt(position)
//let text = "HELLO WORLD";
//text.charCodeAt(0); //72

//3))property access []
//let text = "Hello World";
//text[0];//H
//text[0]= "A";//doesnot work
//retruns undefined if nothing is found

//////////4. Searching String////////////////////////////
// //1))String.indexOf()//
//returns the index of a value in the specified string or returns -1 if it is not found
// let str = "Hello there, Hello All of you";
// console.log(str.indexOf("Hello")); //retruns 0
// console.log(str.lastIndexOf("Hello")); //retuns 13
// console.log(str.indexOf("Hello", 6)); //13
// console.log(str.lastIndexOf("Hello", 12)); //0
// console.log(str.lastIndexOf("Hello", 13)); //13

// //2)) string.search()
//returns the position or -1 if not found
// console.log(str.search("Hello")); // 0
// //Same but canot take second parameter as argument
// //returns -1 if nothing is found

// //3))String.includes()//returns true or false
// console.log(str.includes("there")); //true
// console.log(str.includes("There")); //false
// console.log(str.includes("there", 11)); //false

// //4))String.startsWith("Hello")
// console.log(str.startsWith("Hello")); //true
// console.log(str.startsWith("there", 6)); //true

// //5))String.endsWith()
// console.log(str.endsWith("you")); //true
// console.log(str.endsWith("there", 11)); //true

////Replacing String Content/////////////////////////////////////////
// let text = "I like watching Netflix Tv Shows !";
// let newText = text.replace("Netflix", "DisneyPlus");
// console.log(text); //doesnot change
// console.log(newText); //returns new text
// //Points to note
//replace() is case sensitive , for insensitive use /i
//by default replaces the first, to replace all use /g

/////Upper and Lower case////////////////////////////////////////////
// let str1 = "Hello World";
// let str2 = str1.toUpperCase();
// let str3 = str1.toLowerCase();
// console.log(str1); //returns same value no changes
// console.log(str2); //HELLO WORLD
// console.log(str3); //hello world

//The concat() Method/////////////////////////////////////////////
//combines 2 or more strings and returns a new string
//let text1 = "Hello";
//let text2 = "World";
//let text3 = text1.concat(" ", text2);

// //String.trim()////////////////////////////////////////////////
// let text = "       Hello World!        ";
// text.trim(); // Returns "Hello World!"

//String.padstart or padend////////////////////////////////////////
// let text = "5";
// console.log(text.padStart(4, 2)); //2225
// console.log(text.padEnd(4, 2)); //5222

//Convert STring to an Array by split()///////////////////////////
// let str = "Apple, Banana, Orange, Kiwi";
// let newStr = str.split(", ");
// console.log(newStr); //retuns array
// console.log(newStr[3]); //Kiwi
// newStr[3] = "wiki";
// console.log(newStr); //changed to wiki

//////Common question: what is difference in indexof and search method
//>>common in both is they return -1 if nothing is found
//>>they return the first occurence of a searched value

// let str = "Book is booked for delivery";
// console.log(str.indexOf("b")); //retruns 8
// console.log(str.search("b")); //retruns 8

// //only in indexof(): you can give starting search position as 2nd arg
// console.log(str.indexOf("k")); //returns 3
// console.log(str.indexOf("k", 4)); //returns 11

// //only in search(): value can be regular experssion
// console.log(str.search("book")); // returns 8
// console.log(str.search(/book/i)); // returns 0

/////////////////////////////////////////////////////////////////////
//Examples of using Strings methods/////////////////////////////////
//This ex uses the methods 'toLowerCase()', 'concat(), and includes()

// function greeting(greet, name) {
//   let punct = " . ";
//   if (greet.toLowerCase().includes("good morning")) {
//     punct = "!";
//   }

//   return greet.concat(" ", name, punct);
// }

// console.log(greeting("Welcome and Good Morning", "James"));

// //Welcome and Good Morning James!

// //uses method search(), padStart(), padEnd() and trim()
// document.getElementById("demo5").innerHTML = "   Hello World  ";
// var key = document.getElementById("demo5").innerHTML;
// console.log(key); //Hello World
// key = key.trim(key); //remove blank characters
// console.log(key); //removes blank spaces
// var results = key.search("key");
// console.log(results); //returns -1

// if (results !== -1) {
//   console.log(key, key.length);

//   //make the key 12 ch long by prepending ch
//   let key2 = key.padStart(12, "s");
//   console.log(key2, key2.length);

//   //make the key 15 ch long by appending ch
//   let key3 = key2.padEnd(15, "f");
//   console.log(key3, key3.length);
// } else {
//   console.log("no results found");
//}

// const longStr =
//   "When a string is very long, it can be broken into multiple lines using the slash character as has been done with this string.";
// console.log(longStr);

///////////////////////////////////////////////////////////////////////////////////////
//String Practice////
//1>>str.slice()
//2>>str.substring()
//3>>str.substr()
//4>>str.includes()
//5>>str.search()
//5>>str.indexOf()
//6>>str.lastindexOf()
//7>>str.trim()
//8>>str.concat()
//9>>str.startsWith()
//10>>str.endsWith()
//11>>str.replace()
//12>>str.toLowerCase()
//13>>str.toUpperCase()
//14>>str.split()
//15>>str.padStart()
//16>>str.padEnd()
//17>>str.charAt()
//18>>str.length()

///////////////////////////////////////////////////////////
// var nullVar = null;
// //const str = nullVar.toString();
// //console.log(str); //Uncaught typeError
// //instead use
// const str1 = String(nullVar);
// console.log(str1); //"null"

// var undefinedVar;
// // undefinedVar.toString(); //TypeError
// const str1 = String(undefinedVar);
// console.log(str1); //"undefined"
// console.log(typeof str1); //"string"

//Str.charAt()
// const sentence = "Hello World";
// const index = 4;
// console.log(`The character at index ${index} => ${sentence.charAt(index)}`);

//Str.concat()
// const str1 = "Hello";
// const str2 = "World";
// const str3 = str1.concat(" ", str2);
// console.log(str3);

////////////////////////////////////////////////////////////////////////

//Exercise 1: Check whether an input is string or not
// const is_String = function (input) {
//   return typeof input === "string" || input instanceof String;
// };

// console.log(is_String("")); //true
// console.log(is_String(1)); //true
// console.log(is_String(new String())); //true

//Exercise 2: Check whether a string is blank or not
// const is_Blank = function (input) {
//   if (input.length === 0) {
//     return `This is blank string!`;
//   } else {
//     return `The string is not blank`;
//   }
// };
// console.log(is_Blank(""));
// console.log(is_Blank("Hello World"));
// console.log(is_Blank("   "));

//Exercise 3: convert a string to an array of words
// const string_to_array = function (str) {
//   return str.trim().split(" ");
// };

// console.log(string_to_array("    Robin Singh"));

//Exercise 4: Extract number of characters from string
// const truncate_string = function (str, int) {
//   return str.substr(0, int);
// };

// console.log(truncate_string("Robin", 4));
// console.log(truncate_string("Robin", 2));

// // //Another way
// // let word = "Hello";
// // word = 324; //number
// // word = true; //boolean
// // word = {}; //object
// // word = []; //array
// // console.log(word.constructor);

// const truncString = function (str, length) {
//   if (str.constructor === String && length > 0) {
//     return str.slice(0, length);
//   }
// };
// console.log(truncString("Robin", 4));

//Exercise 5 : Convert a string in abbreivated form
// const abbreivated = function (str) {
//   let strArr = str.trim().split(" ");
//   if (strArr.length > 1) {
//     return strArr[0] + " " + strArr[1].charAt(0) + ".";
//   }
// };
// console.log(abbreivated("Robin Singh"));

//Exercise 6: hide email addresses
// const email = "ramkum@example.com";
// // const emailArr = email.split("@");
// // const [name, domain] = emailArr;
// // console.log(emailArr);
// // console.log(name);
// // console.log(domain);
// // console.log(name[0]); //access first one
// // console.log(name[name.length - 1]);
// const hide_email = function (email) {
//   let emailArr = email.split("@");
//   const [name, domain] = emailArr;
//   let masked_email = name[0] + "******" + name[name.length - 1] + "@" + domain;
//   return masked_email;
// };

// console.log(hide_email("veenaSing@example.com"));

//Exercise 7: Parameterise a string
// const wordString = "Robin Singh from USA";
// const string_parameterize = function (str) {
//   const strArr = str.trim().split(" ");
//   const joinedStr = strArr.join("-");
//   return joinedStr;
// };
// console.log(string_parameterize(wordString));
// console.log(string_parameterize("    Hello There how are you"));

//Exercise 8: Capitalize the first letter of String
// const capitalize = function (str) {
//   let str_first = str.charAt(0).toUpperCase();
//   return str_first + str.slice(1);
// };
// console.log(capitalize("js scripts"));

//Exercise 9: Capitalise the first letter of each string
// const capitalize = function (str) {
//   let strArr = str.trim().split(" ");
//   let arr = [];
//   for (let word of strArr) {
//     arr.push(word.charAt(0).toUpperCase() + word.slice(1));
//   }
//   return arr.join(" ");
// };
// console.log(capitalize("the quick brown fox"));

//Exercise 10: convert all uppercase letters to lowercase and all lowercase to uppercase

// function swapCase(str) {
//   let strArr = str.split("");
//   let arr = [];
//   for (let x of strArr) {
//     if (x === x.toLowerCase()) {
//       y = x.toUpperCase();
//       arr.push(y);
//     } else if (x === x.toUpperCase()) {
//       z = x.toLowerCase();
//       arr.push(z);
//     }
//   }
//   return arr.join("");
// }

// console.log(swapCase("bIG wORLD"));

//Exercise 13: function that concatenates a given string n number of times
//One Way
// const repeatStr = function (str, times) {
//   return str.repeat(times);
// };
// console.log(repeatStr("Ha ", 3));

//Anotherway
// const repeatStr = function (str, times) {
//   let arr = [];
//   for (let i = 0; i < times; i++) {
//     arr[i] = str;
//   }
//   return arr.join(" ");
// };
// console.log(repeatStr("hi", 3));

//Exercise 14: function to insert a string within string at a particular position
// const insertStr = function (str, newstr, index) {
//   if (typeof index == "undefined") {
//     index = 0;
//   }
//   if (typeof newstr == "undefined") {
//     newstr = "";
//   }
//   let updatedString = str.slice(0, index) + newstr + str.slice(index);
//   return updatedString;
// };

// console.log(insertStr("We are doing some exercises."));
// console.log(insertStr("We are doing some exercises.", "JavaScript "));
// console.log(insertStr("We are doing some exercises.", "JavaScript ", 18));

//Exercise 15:
