```js
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
```

| Action | Performed on | Side Effect | Return Value | Is Return Value Used? |
|--|--|--|--|--|
| method call (`forEach`) | outer array | No | `undefined` | No, but shown as output|
| callback execution | each sub-array | No | `undefined` | No |
| element reference (`[0]`) | each sub-array | No | Element at index `0` of sub-array | Yes, used by `console.log` |
| method call (`console.log`) | Element at index `0` of sub-array | Outputs string representation of a Number | `undefined` | Yes, used to determine the callback's return value |
 