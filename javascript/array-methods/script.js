const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// method can be used to add new items to an array:
// its mutation array
fruits.splice(1, 1, 'Carrot');

//ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
//remove first element
const result = fruits.toSpliced(0, 1);
