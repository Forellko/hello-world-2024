const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
const b = map.get('b');

//// remove all
// map.clear()

map.delete('b');
const isHasA = map.has('a');
const isHasB = map.has('b');

map.forEach((el) => {
  console.log(el);
});

const size = map.size;

// spread
const arr = [...map];
