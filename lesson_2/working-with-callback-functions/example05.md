```js
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});
```

* return value: [[2, 4], [6, 8]]

| Action | Performed on | Side Effect | Return Value | Is Return Value Used? |
|--|--|--|--|--|
|method call (`map`)|`[[1, 2], [3, 4]]`|None|`[[2, 4], [6, 8]]`|No|
|outer callback execution|each sub-array|None|a new array (`[2, 4]` and `[6, 8]]`)|Yes, used to transform outer array|
|method call (`map`)|each sub-array|None|a new array|Yes, to determine return value of outer callback|
|inner callback execution|each number of each sub-array|None|each number doubled|Yes, used to transform sub-arrays|
|arithmetic expression (`num * 2`)|value of `num` parameter|None|a number|Yes, to determine return value of inner callback|
