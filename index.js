'use strict';

function repeat(fn, loopNumber){
  for (let i = 0; i < loopNumber; i++) {
    fn(); 
  }
}

function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

repeat(goodbye, 5);