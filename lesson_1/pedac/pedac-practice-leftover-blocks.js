/* 
## 1. Understand the Problem

- input: number of cubes
- output: number of blocks left
- rules:
  - explicit:
    - We will build a structure using the given blocks
    - Valid strucure means:
      - blocks are cubes
      - structure is built in layers
      - top layer is a single block
      - a block in an upper layer must be supported by four blocks in a lower layer
      - a block in a lower layer can support more than one block in an upper layer
      - cannot leave gaps between blocks
    - we will build the tallest  possible valid structure using the given blocks
    - return the number of blocks left  
  - implicit:
    - number of blocks in a layer is the square of the layer
      - first layer -> 1 block
      - second layer-> 4 blocks
      - third layer -> 9 blocks
      - fourth layer-> 16 blocks  
    - amount of cubes given may be more than the needed
    - if there are extra blocks left in hand, can we use them?

## 2. Examples / Test Cases

```js
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
```
- input: 0 -> returns 0
- input: 1 -> returns 0
  - 1st layer = 1 * 1 = 1 (all blocks used)
- input: 2 -> returns 1
  - 1st layer = 1
  - 2nd layer = 2 * 2 = 4 (not enough blocks left to build layer, return 1)
- input: 4 -> returns 3
  - 1st layer = 1
  - 2nd layer = 4 (not enough block left to build layer, return 3)
- input: 5 -> returns 0
  - 1st layer = 1
  - 2nd layer = 4 (all blocks used)
- input: 6 -> returns 1
  - 1st layer = 1
  - 2nd layer = 4
  - 3rd layer = 3 * 3 = 9 (not enough block left to build layer, return 1)
- input: 14 -> returns 0
  - 1st layer = 1
  - 2nd layer = 4
  - 3rd layer = 9 (all blocks used)

## 3. Data Structure

* It seems like it is not necessary that we will need a data structure at this point.

## 4. Algorithm

- Declare a layer variable and initialize it to 1
- Declare a remainingBlocks variable and init it to the function input
- Start a loop that loops forever
  - declare a variable for the remaining blocks for the next layer and assign the result of subtracting the square of layer from remainingBlocks
  - if blocks needed for next layer is a negative number
    - break out of the loop
  - else reassign remainingBlocks to the number of blocks needed for the next layer
  - increment layer by 1
- return the value of remainingBlocks variable

*/

function calculateLeftoverBlocks(numberOfBlocks) {
  let layer = 1;
  let remainingBlocks = numberOfBlocks;

  while (true) {
    let nextLeyerBlocks = remainingBlocks - layer ** 2; 
    if (nextLeyerBlocks < 0) break;
    remainingBlocks = nextLeyerBlocks;
    layer += 1;
  }
  return remainingBlocks;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true