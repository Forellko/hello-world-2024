// every
const array = [1, 2, 3, 4, 5];

// True if all elements is < 5
const isEvery = array.every((el) => el < 5);

// True if one element is = 3
const isSome = array.some((el) => el === 3);

// For each method
array.forEach((el) => 0);

// Array map method
const map = array.map((el) => el + el);

// Array filter method
const filter = array.filter((el) => el > 2);

// Array reduce method
const reduce = array.reduce((acc, el) => (acc += el));

// Array from method
const from = Array.from('12345');
