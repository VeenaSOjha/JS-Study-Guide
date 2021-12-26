//Write a JS to check 2 numbers and return true if one of the number is 100 or if the sum of the 2 numbers is 100

// let a = 10;
// let b = 100;

//check if one of the number is equal to 100
//check individually for value
//the below will give wrong result
// console.log((a || b) === 100); //false because the first value is false
// //this will work though
// console.log(a === 100 || b === 100);

// //Short Circuting
// console.log(3 || "Jonas"); //3 //first true value is returned

// const isEqual = (a, b) => a === 100 || b === 100 || a + b === 100;
// console.log(isEqual(100, 50));
// console.log(isEqual(50, 100));
// console.log(isEqual(0, 10));
// console.log(isEqual(10, 0));

//Write a js program to get the extension of a filename

// const getFileExtension = (str) => {
//   return str.slice(str.lastIndexOf("."));
// };

// console.log(getFileExtension("webSearch.doc.js"));

//Write a js prog to get the proper dater format
// const todayDate = new Date();
// console.log(todayDate); //Mon Dec 06 2021 13:51:00 GMT-0500 (Eastern Standard Time)
// //Write a function where date format is MM/DD/YY

// const getDate = (date = new Date()) => {
//   const month = date.getMonth() + 1; //months are 0 based
//   const days = date.getDate();
//   const years = date.getFullYear();
//   return `${month}/${days}/${years}`;
// };
// console.log(getDate()); //12/6/2021

//Write a js programe to create a string adding "New!" in front of a given string. If the given string is already there then return the original string

// const getNewString = (str) => (str.indexOf("New") === 0 ? str : "New!" + str);
// console.log(getNewString("new Office"));

//now add a little complication we need to check for both upper and lowercase

// const getNewString = function (str) {
//   let a = str.toLowerCase();
//   if (a.indexOf("new") === 0) {
//     return str;
//   } else {
//     return `New! ` + str;
//   }
// };
// console.log(getNewString(" new Library"));

// let str = "Hello";
// console.log(str.indexOf("H"));//0

//Write a JS prog to display the current day and time in the following format Today is : Tuesday Current time is: 10PM : 30:38

// const weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// // let date = new Date();
// // let day = weekday[date.getDay()]; //weekday[2] = Tuesday
// // console.log(day);

// const formattedDate = (date = new Date()) => {
//   let day = weekday[date.getDay()]; // Tuesday
//   let currentHour = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let prepand = currentHour <= 12 ? "AM" : "PM";
//   console.log(currentHour, prepand, minutes, seconds);
// };

// console.log(formattedDate());

//2>>> Print the contents of current window
// function printPage() {
//   window.print();
// }
// //can refer this print page button in Html

//3>> get the current date
// const todayDate = (date = new Date()) => {
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   let year = date.getFullYear();
//   return `${month}-${day}-${year}`;
// };
// console.log(todayDate());

//4>>Find the area of a triangle where length of 3 of its side are 5,6,7
// const side1 = 5;
// const side2 = 6;
// const side3 = 7;

// let s = (side1 + side2 + side3) / 2;
// let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
// console.log(area);

//5>>
