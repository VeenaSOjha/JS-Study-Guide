// console.log("Block Scope");
// //const and let are block scoped var is not.
// {
//   let x = 2;
// }
// //console.log(x); //cannot access x here
// {
//   var y = 2;
// }
// console.log(y); //2 var doesnot have block scope

// console.log("function or Local Scope");
// //all are function scoped , so cannot access anything outside function
// // function myFunction() {
// //   let carName = "Volvo";
// //   var carModel = 1999;
// // }
// // myFunction();
// // console.log(carModel); //cannot access even with var
// //console.log(carName); //cannot access here
// /////////////////////////////////////////////////////////////////
// // //Undecalred variables are automatically "Global"
// // function myFunction() {
// //   carName = "Volvo";
// // }
// // //carName can be used here
// // myFunction();
// // console.log(carName);

/////////////////////////////////////////////////////////////////////
// var name = "Astro"; //this creates a global scope
// function printName() {
//   changeName();
//   console.log(name);
// }
// function changeName() {
//   name = "Codey"; //Updates global name to Codey
// }

//When printName function is called it invokes the changeName function aand as the global name is changed to "Codey"..console will print codey
//printName();//Codey

// //What if we declare name with var in changeName funtion
// //It wont change the name to Codey and it will print "Astro"
// var name = "Astro"; //this creates a global scope
// function printName() {
//   changeName();
//   console.log(name);
// }
// function changeName() {
//   var name = "Codey"; //Updates global name to Codey
// }
// printName(); //Astro

// var a = 10;

// //add5 is a function
// var add5 = function (num) {
//   var b = 5;
//   console.log(num + b); //8
//   var add10 = function (num2) {
//     console.log(num2 + a); //3+10
//   };

//   add10(3);

//   var add15 = function (num3) {
//     var c = 15;
//     console.log(num3 + c); //3+15
//   };

//   add15(3);
// };

// add5(3);

//A function can be called only within that scope it is defined

// const addFunc = function (a, b) {
//   console.log(a + b);

//   const minusFunc = function (c, d) {
//     console.log(c - d);
//   };
//   minusFunc(12, 10);
// };
// //we can not call minusfunc here
// //minusFunc(12, 10);//minusFunc is not defined

// addFunc(32, 10); //This will call both the function

//Also variable defined within scope can be accessed only in that scope
// const a = "Jonas";
// first();
// function first() {
//   const b = "Hello";
//   console.log(b);
//   second();

//   function second() {
//     const c = "Hi";
//     console.log(c);
//     third();
//   }
// }
// function third() {
//   const d = "hey";
//   console.log(d);
// }

// function one() {
//   const a = 1;
//   console.log("one", a);
//   console.log(letter);
// }

// function two() {
//   const b = 2;
//   console.log("two", b);
//   three();
//   one();

//   function three() {
//     const c = 3;
//     console.log("three", c);
//   }
// }
// const letter = "abc";
// two();
// //three();//reference error

//What happens if we redeclare the variable with the same name in function

// function calcAge(birthyear) {
//   age = 2021 - birthyear;

//   function output() {
//     firstName = "Sujata";
//     str = 23;
//     console.log(`${firstName} is ${age} old`, str);
//   }
//   output();
//   return age;
// }
// //output(); //has function scope so error
// let firstName = "Jonas";
// console.log(calcAge(1983));
// console.log(firstName); //Sujata now here we are just changing the value of already declared first Name variable

// //What happens if we create a new variable with same name
// function calcAge(birthyear) {
//   age = 2021 - birthyear;

//   function output() {
//     let firstName = "Sujata";
//     str = 23;
//     console.log(`${firstName} is ${age} old`, str);
//   }
//   output();
//   return age;
// }
// //output(); //has function scope so error
// let firstName = "Jonas";
// console.log(calcAge(1983));
// console.log(firstName); //now here we are  not changing the value andit remains Jonas

//Function Scope
// var fname = "Astro";
// function printName() {
//   changeName();
//   console.log(fname);

//   function changeName() {
//     let fname = "Codey";
//   }
// }
// printName();
