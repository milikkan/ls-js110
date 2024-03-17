/* 
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

1.
- i: a string
- o: a boolean
- r/e:
  - return true if the parentheses of the input string occur in matching pairs
- r/i:
  - if first parentheses is a closing one, return false
  - if there is no parentheses, return true

2.
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

3. array

4.
- high-level:
  - iterate through the string, if you find an opening parentheses, store it, if you find a closing parentheses, remove the last item. Return true if you have no parentheses left.

- step-by-step:
  - define func `isBalanced` that has `str` param
  - declare var `store` and init to `[]`
  - iterate through the chars of `str`
    - if current char is '(', push it to `store`
    - if current char is ')', 
      - if `store` is empty, push currentChar
      - else remove last item from `store`
  - return true if `store` has length `0`  

*/

function isBalanced(str) {
  let store = [];
  [...str].forEach(char => {
    if (char === '(') store.push(char);
    if (char === ')') {
      if (store.length === 0) {
        store.push(char);
      } else {
        store.pop();
      }
    }
  });
  return store.length === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);