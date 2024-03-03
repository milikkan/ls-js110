```js
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
```
| Action | Performed on | Side Effect | Return Value | Is Return Value Used? |
|--|--|--|--|--|
|method call (`filter`)|array of objects|None|`[{c: 'cat', d: 'dog'}]`|No|
|outer callback execution|each object|None|a new filtered array|Yes, used by `filter` for filtering|
|method call (`Object.keys`)|object in the current iteration|None|an array of object keys|Yes, next method call (`every`) is chained on returned array|
|method call (`every`)|array of keys|None|boolean|Yes, used by `filter`|
|inner callback execution|key in the current iteration|None|boolean|Yes, used by `every`|
|object element reference (`[]`)|each object of outer array|None|string value associated with the key|Yes, used by another element reference|
string element reference (`[]`)|each object value|None|Character at index `0`|Yes, used by strict equality operator|
|strict equality (`===`)|char at index `0` of each string and each object key|None|booelan|Yes, used by `every`|

