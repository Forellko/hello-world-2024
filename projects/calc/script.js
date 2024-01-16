const input = document.querySelector('#input');

const numbers = [];
const input_nums = [];
let a = '';
let b = '';
let is1 = true;
let inputString = '';
let operator = '';

for (let i = 0; i < 10; i++) {
  const element = document.querySelector('#num' + i);
  element.onclick = () => onNumClick(i.toString());
  numbers.push(element);
}

function onNumClick(num) {
  if (is1) {
    a += num;
  } else {
    b += num;
  }
  inputString += num;
  input.innerHTML = inputString;
}
