```js
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
```

* Output: 18, 7, 12
* myArr = undefined

| Action | Performed on | Side Effect | Return Value | Is Return Value Used? |
|--|--|--|--|--|
|variable declaration and assignment|n/a|None|`undefined`|No|
|method call (`forEach`)| outer array |None|`undefined`|Yes, for assignment to `myArr`|
|outer callback execution|each sub-array|None|a new array (return value of `map`)|No|
|method call (`map`)|each sub-array|None|a new array (`[undefined, undefined]`)|Yes, to determine the return value of outer callback|
|inner callback execution|each element of sub-array|None|`undefined`|Yes, for transformation of `map`|
|comparison (`>`)|each number|None|a boolean|Yes, used by `if`|
|method call (`console.log`)|numbers greater than `5`|Yes, outputs string representation of a Number|`undefined`|Yes, to determine the result of inner callback|
