const obj = { a: 5, b: 6 };
const arr = [1, 2, 3];

// all keys of obj
for (let key in obj) {
  console.log(key);
}

// for iterable variables Arrays, Strings, Maps, NodeLists
for (let x of arr) {
  console.log(x);
}
