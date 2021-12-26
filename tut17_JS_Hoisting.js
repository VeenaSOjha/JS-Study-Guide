//Variable Hoisting: it is possible to refer to a variable that is declared later in the code, this is called hoisting
//Hoisted variable returns the value undefined
//also the strict mode will throw an error if the variable is declared without the use of var let or const
//If a variable is defined or used without any declaration and it is not in strict mode it will throw no error. To avoid this always use strict mode
//If a variable is defined or used without being declared (var,let const keyword) in that case and it is declared later in the code it is called hoisting and with var keyword hoisting is allowed that means we can declare the variable with var keyword later in the code.
//But we cannot define a variable first and expect to use let and const keyword as this will throw an error
// "use strict";

// myName = "Veena";
// console.log(myName); //Reference Error  myName is not defined
// // //applicable only in strict mode //if strict mode is commented out this is allowed
// // //also if we use var keyword hoisting is allowed
// var myName;

// //With the use of strict method
//"use strict";
// //ex 1
// fruit = "apple";
// console.log(fruit); //reference error//fruit not defined
// // var fruit; //but if we add the var keyword and declare fruit it is allowed and line 14 will show apple as fruit in log
// let fruit; //referece error if declared with let or const

// //ex 2
// // fruit;
// // console.log(fruit); //refernce error in strict mode/ fruit not defined
// // var fruit;
// // //but if we declare fruit later it will show the value of fruit undefined

// // //ex3
// // fruit;
// // console.log(fruit);
// // var fruit = "apple";
// // //it will still show the fruit as undefined

/////////////////////////////////////////////////////////////////////////Without the use of Strict mode
//fruit = "apple";
//console.log(fruit); //apple //This wont throw error coz strict mode is not used but in case of strict mode this is not allowed and will need you to declare the fruit in next line to not show error
//var fruit; //now fruit is apple
//let fruit; //not allowed reference error

//Ex1
// fruit;
// console.log(fruit); //reference Erro

// //Ex2
// fruit;
// console.log(fruit); //undefined
// var fruit;

//Ex5
// fruit;
// console.log(fruit); //undefined
// var fruit = "apple";

//Ex6
// fruit = "apple";
// console.log(fruit); //apple and not undefined
// var fruit;

//Ex7
// fruit = "apple";
// console.log(fruit); //reference Erro
// let fruit;

// //ex3
// fruit;
// console.log(fruit); //ref Error
// let fruit;

// //Ex4
// fruit;
// console.log(fruit); //reference Erro
// let fruit = "Mango";

//////////Variable Hoisting/////////////
//With no use of strict mode

// myName;
// console.log(myName);//myName is not defined

//With use of strict mode
// "use strict";
// myName;
// console.log(myName); //myName is not defined

// myName = "Veena Singh";
// console.log(myName);//Veena Singh

// "use strict";
// myName = "Veena Singh";
// console.log(myName); //uncaught reference error

// myName;
// console.log(myName); //Reference Error
// let myName = "Veena Singh";

// "use strict";
// myName;
// console.log(myName); //Reference Error
// let myName = "Veena Singh";

// myName;
// console.log(myName); //undefined
// var myName = "Veena Singh";

// "use strict";
// myName;
// console.log(myName); //undefined
// var myName;

//////////////////////////////////////////////////////////////////////
// place = "New York";
// console.log(place); //New york "This is allowed only in non strict mode"

// "use strict";
// place1 = "Delhi";
// console.log(place1); //Uncaught refernce error in strict mode

// place;
// console.log(place); // place not defined
// place = "New York";

//"use strict";
// place;
// console.log(place); //undefined in both strict and non strict mode
// var place = "New York"; //

// place;
// console.log(place);
// let place = "New york "; //reference error in both non strict and strict mode

// place = "New York";
// console.log(place); //New York
// var place = "Delhi";

// place = "New York";
// console.log(place);
// var place = "Delhi";
// place = "NJ";
// console.log(place); //NJ
///////////////////////////////////////////////////////////
///Practice////How hoisting works

//if we use strict it wont allow us to declare a variable without var let or const keyword
//"use strict";
//pet = "cat"; //will give error not allowed in strict mode
//Error: pet is not defined
//console.log(pet);
//how ever if we remove the strict mode it is allowed
//In case if we are in strict mode and if we define the pet later with var keyword it wont throw error and it is allowed
//var pet;
//if we define the variable with let keyword it will throw error in both cases that is strict or non strict
//let pet;
//There can we another scenario where we neither define or declare the variable
// newPet;
// console.log(newPet); //will throw an error is not defined
// var newPet = "dog"; //This is allowed but the value will be undefined

//another imp thing to note is we can only hoist function declaration and not arrow function or function expression

// console.log(addDeclaration(2, 3));
// function addDeclaration(a, b) {
//   return a + b;
// }
//This is allowed
//below is not allowed
// console.log(addExp(2, 3)); //Error : Cannot access before initialisation
// var addExp = function (a, b) {
//   return a + b;
// };
// console.log(addExp(2, 3));

// let addExp = (a, b) => a + b;
