```js
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
```

| Action | Performed on | Side Effect | Return Value | Is Return Value Used? |
|--|--|--|--|--|
| method call (`map`) | outer array | No | a new array (`[1, 3]`) | No |
| callback execution | each sub-array | No | number at index `0` of sub-array | Yes, used by `map` for transformation |
| element reference (`[]`) | each sub-array | No | element at index `0` of each sub-array | Yes, used by `console.log` | 
| method call (`console.log`) | element at index `0` of each sub-array | Yes, outputs string representation of a number | `undefined` | No |
| element reference (`[]`) | each sub-array | No | element at index `0` of each sub-array | Yes, explicitly returned by callback |
