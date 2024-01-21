// Unique values
const set = new Set();
set.add('a');
set.add('a');
set.add('b');
set.add('c');
set.delete('b');
const isHasA = set.has('a');
const isHasB = set.has('b');
//// remove all
// set.clear();
set.forEach((el) => {
  console.log(el);
});
const size = set.size;

// spread
const arr = [...set];
