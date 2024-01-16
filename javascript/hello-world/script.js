const block = document.querySelector('#block');
block.innerHTML = 'Hello JavaScript!';

const arr = ['hello', 'world', 'block1', 'block2'];

arr.forEach((element) => {
  const docElement = document.createElement('div');
  docElement.innerHTML = element;
  block.appendChild(docElement);
});
