console.log("About Sets");
//Collection of unique values
//value can occur only once in set
//Set methods
//new Set() : Creates a new Set
//add(): Adds a new element to the Set
//delete(): Removes an element from a Set
//has(): returns true or false depending on if value exists in the set
//forEach(): Invokes a callback for each element
//values(): returns iterates all the values
//size property : returns the number of elements in a Set

//How to create a Set
// //>> Passing an array to new Set()
// const alphabets = new Set(["a", "b", "c", "d"]);
// const numbers = new Set([1, 2, 3, 4, 5]);
// console.log(alphabets);
// console.log(numbers);

// //Add method to add values
// alphabets.add("e");
// console.log(alphabets);

//forEach() Method

// const numbers = new Set([45, 4, 9, 16, 25]);
// numbers.forEach(function (index, value, arr) {
//   console.log(value);
// });

// // //values()
// const letters = new Set(["a", "b", "c"]);
// // console.log(letters.values());

// //for(const x of letter.values())
// for (const x of letters.values()) {
//   console.log(x);
// }

// //////////////Maps///////////////////////////////////////////
// //Create Map by passing an array to the new Map()
// //Passing an Array to new Map()
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 600],
// ]);
// fruits.set("Grapes", 200);
// //fruits.set("Peach");
// fruits.set(300);
// console.log(fruits);

// // //Create a Map : use Map.set
// // const veggies = new Map();
// // veggies.set("Spinach", 100);
// // console.log(veggies);
// //Set method can also be used to change the existing values
// const numbers = new Map([
//   [100, "One hundred"],
//   [200, "Two Cents"],
// ]);
// console.log(numbers);
// numbers.set(100, "One cent"); //To change the value of existing
// console.log(numbers);
// //Get Method can be used to get the value of key in a Map
// console.log(numbers.get(200)); //returns Two Cents
// console.log(numbers.get("Two Cents")); //Undefined
// //Size property returns the number of elements
// console.log(numbers.size); //2
// //Delete method removes a Map element
// // numbers.delete(100);
// console.log(numbers);
// //The has() Method returns true or false
// console.log(numbers.has(100));

// ////For each() Method on Map
// let countryAndCapital = new Map([
//   ["India", "New Delhi"],
//   ["USA", "Washington DC"],
//   ["UK", "London"],
// ]);
// countryAndCapital.set("Russia", "Moscow");
// console.log(countryAndCapital);

// countryAndCapital.forEach(function (val, key) {
//   console.log(`The Capital of ${key} is ${val}`);
// });

// //The entries() Method returns key and value in a map
// for (const x of countryAndCapital.entries()) {
//   console.log(x);
// }

////Practice notes/////////////////////////////////
//Set has unique values
// //how to create a set
// // const fruits = new Set(["apple", "banana", "cherry"]);
// console.log(fruits);
// //Second method
// const cars = new Set();
// cars.add("BMW");
// cars.add("Foyd");
// console.log(cars);
// //Third method
// const car3 = "Honda";
// cars.add(car3);
// console.log(cars);

// //We can iterate over set too
// for (let x of fruits) {
//   console.log(x);
// }
// console.log(fruits.values()); //returns object set iterator
// //so we can loop thru it
// for (let x of fruits.values()) {
//   console.log(x);
// }
////For Each method on Set
// const fruits = new Set(["apple", "banana", "cherry"]);
// fruits.forEach(function (value) {
//   console.log(value);
// });
// //add(var/"value")
// fruits.delete("cherry");
// console.log(fruits);
// console.log(fruits.has("banana"));
// console.log(fruits.has("Kiwi"));
// console.log(fruits.size);

////Difference between Sets and Maps
//Sets : unique values of any data type
//maps: key value pair
// //Suppose there is an array with duplicate values we can create a set to include only unique ones
// let decades = [1990, 1990, 2000, 2010, 1990, 2000, 2020];
// let uniqueDecades = new Set(decades);
// console.log(uniqueDecades); //returns [1990, 2000, 2010, 2020]
// //we can also add new values
// uniqueDecades.add(1983);
// console.log(uniqueDecades); //[1990,2000, 2010, 2020, 1983]

///////Map is used instead of an object for recording quiz scores
// let quizScores = new Map();
// //we can add values by set method
// quizScores.set("quiz1", [100, 80, 70]);
// quizScores.set("quiz2", [90, 80, 70]);
// console.log(quizScores);

// let fruitBasket = new Map([
//   ["appple", 300],
//   ["orange", 500],
//   ["banana", 600],
// ]);

// let family = new Map([
//   ["Mother", "Mom"],
//   ["father", "Pop"],
//   ["daughters", 2],
//   ["sons", "3"],
// ]);
// console.log(family);

////////////////////////////////////////////////////////////////////
//Create a map
// const quizScores = new Map([
//   ["Quiz1", [200, 300]],
//   ["Quiz2", [400, 300]],
// ]);
// quizScores.set("Quiz3", [345, 678]);
// console.log(quizScores);
// console.log(quizScores.values());
