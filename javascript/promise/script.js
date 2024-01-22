async function fun() {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 3000);
  });
  console.log(result);
}

await fun();
