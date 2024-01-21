const myNums = {};

myNums[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n === 100) {
        done = true;
      }
      return { value: n, done };
    },
  };
};

for (let i of myNums) {
  console.log(i);
}
