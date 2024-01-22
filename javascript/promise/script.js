const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 3000);
});

promise.then((result) => {
  console.log(result);
});
