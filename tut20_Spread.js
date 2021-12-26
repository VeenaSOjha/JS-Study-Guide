console.log("Spread");
//Actual use case of spread
//if we need to unpack arrays
// const arr = [1, 2, 3, 4, 5];
// const newarr = [...arr, 6, 7, 8];
// console.log(newarr); //[1, 2, 3, 4, 5, 6, 7, 8]
// console.log(...arr, 6, 7, 8); //1 2 3 4 5 6 7 8

//can be used to join 2 arrays
// const arr = [1, 2, 3];
// const arr1 = [4, 5, 6];
// const all = [...arr, ...arr1];
// console.log(all);

// //can be used to make a copy of obj
// const obj = {
//   fName: "Veena",
//   job: "Student",
//   age: 39,
// };
// // const objCopy = { ...obj, lName: "Singh" };
// // objCopy.fName = "Mitali";
// // console.log(obj);
// // console.log(objCopy); //Extra properties are simply added and name changed

// //join 2 objects
// const obj1 = { lName: "Singh", freind: "Shivani" };
// const allObj = { ...obj, ...obj1 };
// console.log(allObj);

//Strings can also be unpacked with help of spread
//convert string to arrays
// const letters = "JavaScript";
// const arr = [...letters];
// console.log(arr);
//
// const letters = "Coding is fun";
// const arr = [...letters, "!"];
// console.log(arr);
