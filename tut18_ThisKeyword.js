"use strict";
// console.log("This Keyword");
// //this always points to window object
// console.log(this); //Window object
// console.log(this.location);
// console.log(this.document);
// console.log(this.alert("hi"));

//but also take note of the fact that function dont have their own this keyword
// function add(a, b) {
//   age = 23;
//   console.log(this.age); //undefined//and this.age will result in error
//   return a + b;
// }
// add(3, 2);
// //Why is this undefined because when a function is called the this keyword is not defined

//Now if the same thing happens with arrow function or function expression
// const addArrow = (a, b) => {
//   a + b;
//   console.log(this); //now here this will not be undefined but will point to window object which is parent of add Arrow function
//   console.log(a + b);
// };
// addArrow(2, 3);

// const addArrow = (a, b) => {
//   let age = 23;
//   console.log(age, a + b);
//   const double = () => console.log(this.age); //undefined
//   double();
// };

// addArrow(5, 2);

// function add(a, b) {
//   let age = 23;
//   console.log(age, a + b);
//   const double = () => console.log(this.age); //undefined
//   double();
// }

// add(5, 2);

// const obj = {
//   fName: "Rose",
//   lName: "Woodman",
//   year: 1980,
//   add: function (a) {
//     let num = 2002;
//     console.log(this.year + num + a);
//     function another() {
//       //   console.log(this.year);
//       //   console.log(this.num);
//     }
//     another();
//   },
// };
// obj.add(2); //3984

// const obj = {
//   fName: "Rose",
//   lName: "Woodman",
//   year: 1980,
//   add: function (a) {
//     let num = 2002;
//     console.log(this.year + num + a);
//     const another = () => {
//       console.log(this.year); //1980
//       console.log(num); //2002
//     };
//     another();
//   },
// };
// obj.add(2);
