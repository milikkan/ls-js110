// Identify the higher-order functions and callbacks in this code.

function scream(message, helper) {
  const shout = () => message.toUpperCase();

  return helper(shout());
}

const exclamate = str => str + "!!!";

const foo = ["heLp", "Boo", "arGH", "Oh no"];
const FOO = foo.map(word => scream(word, exclamate));

// higher-order functions: 
// explanation: these are functions that take another function as argument, return a function or both
// scream, map

// callbacks:
// explanation: these are functions that are passed as arguments to other functions
// callback of map, exclamate
// note that shout is not a callback, on line 6, the result of invoking shout is passed to helper function