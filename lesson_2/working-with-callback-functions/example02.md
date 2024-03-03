```js
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]
```

| Action | Performed on | Side Effect | Return Value | Is Return Value Used? |
|--|--|--|--|--|
| method call (`map`) | outer array | No | a new array | No, but shown as output |
| callback execution | each sub-array | No | `undefined` | Yes, used by `map` for transformation |
| element reference (`[0]`) | each sub-array | No | element at index `0` of sub-array | Yes, used by `console.log` |
| method call (`console.log`) | element at index `0` of sub-array | Outputs string representation of a Number | `undefined` | Yes, used to determine the callback's return value |
