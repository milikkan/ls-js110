/* 
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

1.
- i: an array of strings
- o: console output
- r/e:
  - count the number of occurences of each item
  - items are case-sensitive

2. given below

3. an object to keep track of counts

4.
- declare a variable `counts` and init to `{}`
  - keys will be items names
  - values will be count
- iterate through arr
  - if `counts` has a key for the current item
    - increment it by `1`
  - else
    - create a new key for the current item an init it to `1`
- print the `counts` object
  - iterate through the keys of `counts`
    - print "`key` => `count[key]`"  
*/

function countOccurrences(arr) {
  let counts = {};
  arr.forEach(item => {
    let count = counts[item] || 0;
    counts[item] = count + 1;
  });
  
  Object.keys(counts).forEach(key => console.log(`${key} => ${counts[key]}`));
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1