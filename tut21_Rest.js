//Rest packs the elements
// const [a, b, ...num] = ["apple", "ball", 1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(num);

// let array = ["one", 1, "two", 2, 3, 4];
// for (let val of array) {
//   if (val === 3) {
//     array.push("three");
//   }
// }
// console.log(array); //one 1 two 2 3 4 three
// array.splice(1, 1);
// console.log(array); //at index 1 remove 1//one two 2 3 4 three
// array.splice(2, 3, "four"); //at index 2 remove 3 [2 3 4]//add four
// //one two four three

//2////////////////////////////////////////
//if no benefits: data returns null false or 0
//if benefits: obj is returned

// const benefits = null;
// if (benefits == false) {
//   console.log("no benefits", benefits);
// } else {
//   console.log(benefits);
// }
// console.log(null == false); //false
// console.log(0 == false); //true
// console.log("" == false); //true

//Search for customers and look if they exist
//if any info is falsy value
// const customer = {
//   name: "", //false
//   place: "RI", //true
//   age: 0, //false
//   email: null, //false
// };
// const valuesArr = [];
// for (const key in customer) {
//   const obj = {};
//   //   obj[key] = customer[key];
//   //   console.log(obj[key]);
//   //console.log(customer[key]);
//   console.log(!!customer[key]);
//   //   console.log(Boolean(customer[key]));
//}

// const values = []; //
// for (const key in customer) {
//   const obj = {};
//   console.log(!customer[key]);
//   // obj[key] = !!customer[key];
//   values.push(obj);
// }
// console.log(values);

//Array of objects in JS
// products = [
//   { name: "100 KW Generator", code: "G100" },
//   { name: "200 kW generator", code: "G200" },
//   { name: "500 kW generator", code: "G500" },
// ];

// //console.log(products);
// const str = products
//   .filter((product) => !product.name.includes("500 kW"))
//   .map((product) => `${product.code} - ${product.name}`);
// console.log(str);

//
// let numberOfTasks;
// let taskRequired;
// let taskEmpty;
// let currentTask = null;
// let tasks = ["Water the plants", "Cook dinner"];
// if (tasks.length === 0) {
//   numberOfTasks = 0;
// }
// if (currentTask == undefined && currentTask == null) {
//   //both true
//   taskRequired = true;
// }
// if (currentTask == "" || currentTask == null) {
//   //any true
//   taskEmpty = true;
// }
// console.log(numberOfTasks); //undefined
// console.log(taskRequired); //true
// console.log(taskEmpty); //true

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log([...arr1, ...arr2]);
// console.log(arr1.concat(arr2));
// console.log([arr1, arr2].flat());
