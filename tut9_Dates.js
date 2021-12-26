// console.log("All about Dates");
// const d = new Date(); //Current date and time
// const e = new Date(2021, 10, 5, 10, 33, 30, 0); //specidic yeAR
// console.log(d); //browsers timeZone and display date as String
// const F = new Date("October 13, 2014 11:13:00");

//Date Get Methods
// const d = new Date();
// const getTime = d.getTime();
// console.log(getTime); // returns milliseconds
// const getFullYr = d.getFullYear();
// console.log(getFullYr); //2021
// const getMonth = d.getMonth();
// console.log(getMonth); //9 because js starts with 0 month
// console.log(d.getDate()); //5
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getDay()); //2 sunday is 0 , tuesday is 2

//Date Set Methods

//Dates can be created using Date()constructor or new Date()

//Ways to create dates
//date constructor
// let today = new Date();

// //Passing string in Month, day, year , time format
// let birthday = new Date("December, 2, 2021, 1:03:00");
// let birthday = new Date("12/7/21");
// console.log(birthday);

// //passing value in new Date()
// birthday = new Date(2021, 11, 12);
// console.log(birthday);

//Dates are always object in JS
//method : getDate(), getDay(), getMonth(), getFullYear()
//setmethod:setDate(), setDay(), setHours(), setMonth()

///Date Problems////
//console.log(new Date());
//Tue Dec 07 2021 12:44:51 GMT-0500 (Eastern Standard Time)
//console.log(new Date(12 / 7 / 2021));

//Note: new Date returns new Date object
// let today = new Date();
// console.log(typeof today, today); //date object
// //object Tue Dec 07 2021 12:54:55 GMT-0500 (Eastern Standard Time)
// let str = today.toString();
// console.log(typeof str, str);
// //string Tue Dec 07 2021 12:55:59 GMT-0500 (Eastern Standard Time)

// //Note: Date() returns string representation of day and time
// console.log(typeof Date()); //string

////Static Methods
//>> Date.now()
//console.log(Date.now()); //1638900004209

//Get date, month, year and time
// const date = new Date();
// const [month, day, year] = [
//   date.getMonth() + 1, //months are 0 indexed
//   date.getDate(),
//   date.getFullYear(),
// ];
// console.log(month, day, year); //12 7 2021

// //If you want to represent the month names
// const months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// const monthNow = months[date.getMonth()];
// console.log(monthNow); //DEC

//Get day of the month
// const today = new Date();
// const day = today.getDay(); //0 index based where 0 is sunday
// console.log(day);

// //Get hours of the day
// const hours = today.getHours(); // 0 - 23

// //Get minutes
// const minutes = today.getMinutes(); // 0 -59

// //Get Seconds
// const sec = today.getSeconds(); // 0 - 59

// //how to know AM or PM
// //AM = between 0:00  to 12:00
// //PM = between 12:00 to 0:00

// let prepand = hours >= 12 ? "PM" : "AM";
// console.log(hours, prepand);

// const today = new Date();
// const day = today.getDay();
// const daylist = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday ",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(`Today is : ${daylist[day]}.`);
// let hour = today.getHours();
// const minute = today.getMinutes();
// const second = today.getSeconds();
// let prepand = hour >= 12 ? " PM " : " AM ";
// hour = hour >= 12 ? hour - 12 : hour;

// //if hour is greater than or equal to 12 that is 13 or 14 then return hour (14 - 12) i.e 2 or else return the hour
//This will give us integer in 1 to 12
//Step by Step : first the prepand will check if the hour is greater than or equal to 12 and will prepand PM or AM depending on the condition
//After prepand the hour will be conveted to 1 , 2, 3 depending what the time is. If its greater than 12 or not

// if (hour === 0 && prepand === " PM ") {
//   //This condition here checks if the hour is equal to 0 and the prepand is PM

//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = " Noon";
//   } else {
//     hour = 12;
//     prepand = " PM";
//   }
// }
// if (hour === 0 && prepand === " AM ") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = " Midnight";
//   } else {
//     hour = 12;
//     prepand = " AM";
//   }
// }
// console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);
