'use strict';

// function repeat(fn, loopNumber){
//   for (let i = 0; i < loopNumber; i++) {
//     fn(); 
//   }
// }
// function hello(){
//   console.log('Hello world');
// }
// function goodbye(){
//   console.log('Goodbye world');
// }
// repeat(goodbye, 5);

// function filter(inArray, fn) {
//   let newArray = [];
//   for (let i = 0; i < inArray.length; i++) {
//     if(fn(inArray[i])){
//       newArray.push(inArray[i]);
//     }
//   }
//   return newArray;
// }
// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// function hazardWarningCreator(typeOfWarning){
//   let counter = 0;
//   return function(location){
//     counter++;
//     let warningMessage = `DANGER! There is a ${typeOfWarning} hazard at ${location}!`;
//     let warningCounter = `The ${typeOfWarning} hazard alert has triggered ${counter} time(s) today!`;
//     console.log(warningMessage);
//     console.log(warningCounter);
//     //return `${warningMessage} ${warningCounter}`;
//   };
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road');

// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Pacific Ave and East Main St');
// rocksWarning('1st and Broadway');

// function removeNegatives(el){
//   return (el[0] >= 0 && el[1] >= 0);
// }

// function combine(el){
//   let combined = []
//   combined.push(el[0] + el[1]);
//   return combined;
// }

// let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
//removeNegatives(turtleMovements);
// let turtleFilter = turtleMovements.filter(function (el) {
//   return (el[0] >= 0 && el[1] >= 0);
// });

// let turtleFiltered = turtleMovements.filter(removeNegatives);
// let turtleMapped = turtleFiltered.map(combine);
// console.log(turtleFiltered);
// console.log(turtleMapped);

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'.split(' ');
console.log(input);