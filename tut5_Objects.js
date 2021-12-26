// console.log("All About Objects");

// // const car = {
// //   "car type": "Fiat",
// //   model: "500",
// //   color: "White",
// // };

// // //Accessing object prop values
// // console.log(car.color); //"White"
// // console.log(car["car type"]); //Fiat

// // //Objects can also have methods
// // const person = {
// //   fname: "Veena",
// //   lname: "Singh",
// //   age: 50,
// //   eyeColor: "blue",
// //   fullName: function () {
// //     return this.fname + " " + this.lname;
// //   },
// // };
// // //object methods are functions stored as property

// // //Accessing object methods
// // let x = person.fullName();
// // console.log(x);

// /////////////////////////////////////////////////////////////////////////////Primitives vs Objects
// //Primitives are immutable which means they are hardcoded and cannot be changed
// //ex: x = 3.14, you can change the value of x but you can not change the value of 3.14
// //common practice is to declare objects with const keyword
// //In js objects property:value

// //Objects are mutable. They are addressed by reference and not value
// // const person = {
// //   firstName:"John",
// //   lastName:"Doe",
// //   age:50, eyeColor:"blue"
// // }

// // const x = person;
// // x.age = 10;      // Will change both x.age and person.age

// ////////////////////////////////////////////////////////////////
// //creating Js Objects
// //>>1 Object Literal
// // const person = {
// //   firstName: "John",
// //   lastName: "Doe",
// //   age: 50,
// //   eyeColor: "blue",
// // };

// //>>2 using new Object()
// // const person = new Object();
// // person.firstName = "John";
// // person.lastName = "Doe";
// // person.age = 50;
// // person.eyeColor = "blue";

// ///////////////////Properties///////////////////////////////////
// // const person = {
// //   fname: "Veena",
// //   lname: "Singh",
// //   age: 40,
// //   job: "JS developer",
// // };

// // //Access properties
// // let ageOfPerson = person.age;
// // console.log(ageOfPerson);
// // ageOfPerson = 38;
// // console.log(ageOfPerson);

// // //access properties in loop
// // for (let x in person) {
// //   //console.log(x);//These are just keys fname, lname, age, job
// //   console.log(person[x]); //now value is iterated, veena, singh, 40 etc//Why 40????????????????????????
// // }
// ///////////////////////////////////////////////////////////////////
// //////////////Object.values()////////////////////////////////
// //>>object can be converted to an array using object.values
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// const myArray = Object.values(person);
// console.log(myArray);

// // //////////////////////Show object in html/////////////////
// // const person = {
// //   fname: "John",
// //   city: "Boston",
// //   age: function () {
// //     return 40;
// //   },
// // };

// // //document.getElementById("demo5").innerHTML = person;
// // //this will return [object Object]
// // //instead stringify object
// // // let myString = JSON.stringify(person);
// // // document.getElementById("demo5").innerHTML = myString;
// // //Will return {"name":"John","age":40,"city":"Boston"}
// // //will return {name and city only} and not function if any
// // //Stringify function
// // //To fix this problem convert functions to String
// // person.age = person.age.toString(); //now its not function but string

// // let myString = JSON.stringify(person);
// // document.getElementById("demo5").innerHTML = myString;

// // ////////////////////////////////////////////////////////////////////
// // ////Arrays can also be stringified//////////////////////////////
// // const arr = [2, 4, 6, 8, 10];
// // //document.getElementById("demo5").innerHTML = arr; //2,4,6,8
// // document.getElementById("demo5").innerHTML = JSON.stringify(arr); //[2,4,6,8,10]

// ////////////////////////////////////////////////////////////////////
// ////////Getters and Setters///////////////////////////////////////
// // //Allow to get and set prop
// // const person = {
// //   fName: "John",
// //   lName: "Doe",
// //   language: "English",
// //   get lang() {
// //     return this.language;
// //   },
// // };

// // console.log(person.lang); //English

// // //Setters allow to set a property value
// // const person = {
// //   fName: "John",
// //   lName: "Doe",
// //   language: "",
// //   set lang(l) {
// //     this.language = l;
// //   },
// // };
// // person.lang = "English";
// // console.log(person.language); //set to English

// //////////////////////////////////////////////////////////////////////////JS Object Constructors////////////////////////////
// function person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// //Now with this constructor we can make as many person with different variables
// const myFather = new person("Vijay", "Kumar", 65, "blue");
// const myMother = new person("Urmila", "devi", 60, "brown");
// console.log(myFather);

//Constructor method
// function animal() {
//   this.type = "dog";
//   this.sound = function () {
//     console.log("woof!");
//   };
// }
// let dog = new animal();
// dog.sound();
// dog.type;
// console.log(dog.type);

//Object literal method
// let animal = {
//   type: "dog",
//   sound: function () {
//     console.log("woof!");
//   },
// };

// // animal.sound();

//////////////Object Property///////////////////
//>> When using the object literal syntax : Object can be an existing variable or function invocation
// const age = 1983;
// const person = {
//   fName: "Veena",
//   lName: "Singh",
//   age: 2001,
//   birthYear: "Chandigrah",
//   fullName: function () {
//     return this.fName + " " + this.lName;
//   },
// };
// console.log(person.age); //1983 or we can change it to 2001

// //>> Property name can be numeric or string and also can be empty string or invalid identifier withquotes
// const person = {
//   fName: "Veena",
//   "": "empty string",
//   "12%": "invalid identifier",
//   "%#": "invalid identifier 2",
//   12: "numeric property",
// };

// console.log(person);
// console.log(person["%#"]);
// console.log(person["12"]);
// console.log(person[""]);
// // console.log(person.12);//error

//if an object is initialised using const keyword the properties of an object can still be modified

//Get and Set property of Objects
// let obj1 = {
//   a_For: "apple",
//   b_For: "ball,",
//   c_For: 43,
//   getd_For() {
//     return "dog";
//   },
// };

// const dStands = obj1.getd_For();
// console.log(dStands);//dog

// let obj1 = {
//   aFor: "ace",
//   bFor: "bird",
//   cFor: "cactus",
//   dFor: "",
//   setDfor(d) {
//     this.dFor = d;
//   },
// };

// obj1.setDfor("dice");
// console.log(obj1);

//Shallow copy of Objects
// const person = {
//   fName: "John",
//   lName: "Doe",
//   age: 23,
//   freinds: ["Shawn", "Alice", "Bob"],
//   add: function () {
//     return 43;
//   },
// };

// // person1 = person;
// // person1.fName = "Rose";
// // console.log(person);
// // console.log(person1);

//This will change the name to Rose for both the objects

// person1 = Object.assign({}, person);
// person1.fName = "Rose";
// console.log(person1); //Rose
// console.log(person); //John
// //but doesn't work for nested objects
// person1.freinds.push("Mona");
// console.log(person1.freinds);
// console.log(person.freinds); //Mona is added here too

// person1 = { ...person };
// // console.log(person1);
// person1.fName = "Rose";
// console.log(person); //John
// console.log(person1); //Rose
// person1.freinds.push("Mona");
// console.log(person.freinds); //Mona is again added to both the nested array
// console.log(person1.freinds);

// function Book(title, year, author) {
//   this.title = title;
//   this.year = year;
//   this.author = author;
// }
// const bookOne = new Book("One", 2000, "JD");
// const bookTwo = new Book("Two", 2101, "SD");
// console.log(bookOne);
// console.log(bookTwo);

// Book.prototype.revise = function (newyear) {
//   this.year = newyear;
//   this.revised = true;
// };

// bookTwo.revise(2312);
// console.log(bookTwo.revised);
// console.log(bookTwo);
// console.log(bookOne);
