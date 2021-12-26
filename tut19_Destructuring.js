// console.log("Destructuring");
// //Assignment destructuring is a shorthand assignment syntax which //////unpacks values from arrays
// //unpacks prop from objects
// //packs them to individual values

// //Destructure an array
// // const dimensions = [23, 57, 60];
// // let [height, weight, length] = dimensions;
// // console.log(height, weight, length); //23, 57, 60

// // //Destructure an object
// // const exam = {
// //   score: 87,
// //   duration: 115,
// //   cert: "JSI",
// // };

// // let { duration, cert, score } = exam;
// // console.log(duration, cert, score); // 115 'JSI" 87

// // const restaurant = {
// //   name: "Dominos Pizza House",
// //   location: "Mendon Road, Cumberland, Rhode Island",
// //   categories: ["Vegetarians", "Chicken", "Meat", "Desserts"],
// //   starterMenu: ["Buffalo Wings", "Boneless Chicken", "Garlic Bread"],
// //   mainMenu: ["Pizza", "Pasta", "Cakes"],
// //   deliverOrder: function ({ time, place, starter, main }) {
// //     console.log(
// //       `ordered at ${time} at ${place}, ${this.mainMenu[main]} , ${this.starterMenu[starter]}`
// //     );
// //   },
// //   openingHours: {
// //     mon: { open: 11, close: 23 },
// //     tue: { open: 10, close: 20 },
// //     wed: { open: 9, close: 19 },
// //     thur: { open: 12, close: 12 },
// //     fri: { open: 15, close: 24 },
// //     sat: { open: 0, close: 24 },
// //   },

// //   order: function (starterIndex, mainIndex) {
// //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //   },
// // };

// // restaurant.deliverOrder({
// //   time: 20,
// //   place: "Mendon Road",
// //   main: 1,
// //   starter: 1,
// // });

// //We can also use destructuring for objects in functions
// //We can pass an object as parameters in functions and then destructure it

// // //To destructure restaurant categories Arrays
// // const [veg, chicken, , dessert] = restaurant.categories;
// // console.log(veg);//Vegetarians
// // console.log(chicken);//Chicken
// // console.log(dessert);//desserts

// //We can assign default values too to Arrays
// // const [veg, chicken, , dessert, cake = "brownies"] = restaurant.categories;
// // console.log(veg); //Vegetarians
// // console.log(chicken); //Chicken
// // console.log(dessert); //desserts
// // console.log(cake); //brownies

// //Nested Arrays
// // const arr = [1, 2, 3, 4, [5, 6, 7, 8]];
// // const [a, b, , , [c, d, , ,]] = arr;
// // console.log(a, b, c, d); //1. 2.5. 6

// //Destructure used in function
// // console.log(restaurant.order(0, 0)); //returns array
// // //So if a function returns an array we can use to destructure it and assign it to variables to work with
// // const [start, course] = restaurant.order(0, 0);
// // console.log(start); //buffaloWings
// // console.log(course); //Pizza

// // Destructure object
// // const {
// //   name: restaurantName = "Pizzeria",
// //   openingHours,
// //   starterMenu,
// // } = restaurant;
// // console.log(openingHours);
// // console.log(starterMenu);
// // console.log(restaurantName);

// //Destructure nested object
// // const {
// //   openingHours: { mon, tue },
// // } = restaurant;
// // // console.log(openingHours);
// // console.log(mon);
// // console.log(tue);

// //
// // const {
// //   openingHours: {
// //     mon: { open: monOpen, close: monClose },
// //     tue: { open, close },
// //     wed: { open, close },
// //   },
// // } = restaurant;
// // //console.log(openingHours);
// // console.log(monOpen);
// // console.log(monClose);
// // console.log(open);
// // console.log(close);

// //Destructuring Arrays
// const personObj = {
//   name: "Gaby",
//   freinds: ["Alice", "Bob", "Cathy"],
//   hobbies: ["Cooking", "Gardening", "Reading", "Painting"],
//   favorite: function (fav) {
//     console.log(`${this.name}'s favorite hobby is this.hobbies[fav]`);
//   },
//   booksRead: {
//     book1: { author: "Harper Lee", yr: 1970, name: "To Kill a Mocking bird" },
//     book2: { author: "Alice Walker", yr: 1971, name: "The Color Purple" },
//     book3: { author: "Joseph Heller", yr: 1972, name: "Catch-22" },
//   },
//   numberArr: function (a, b, c) {
//     return [a, b, c];
//   },
// };

// console.log(personObj);

// //Destructuring obj
// // const { name, freinds, hobbies } = personObj;
// // console.log(name);
// // console.log(freinds);
// // console.log(hobbies);

// //Nested obj
// // const {
// //   book1: { author, yr },
// //   book2: { author: author2, yr: yr2 },
// //   book3,
// // } = personObj.booksRead;
// // console.log(author, yr); //Harper Lee 1970
// // console.log(author2, yr2); //Harper Lee 1970

// // //Destructuring Arrays
// // const [hobby1, , hobby2, hobby3, hobby4 = "Dancing"] = personObj.hobbies;
// // console.log(hobby1, hobby2, hobby3, hobby4);
// // //use in function
// // //if a function returns an array
// // const [a, b, c] = personObj.numberArr(7, 2, 18);
// // console.log(a); //7
// // console.log(b); //2
// // console.log(c); //18
