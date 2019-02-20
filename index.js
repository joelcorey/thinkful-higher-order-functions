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

function hazardWarningCreator(typeOfWarning){
  let warningCounter;
  return function(location){
    warningCounter++;
    let warningMessage = `DANGER! There is a ${typeOfWarning} hazard at ${location}!`;
    let warningCounter = `The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`;
    console.log(warningMessage);
    console.log(warningCounter);
    //return `${warningMessage} ${warningCounter}`;
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');

rocksWarning('Main St and Pacific Ave');