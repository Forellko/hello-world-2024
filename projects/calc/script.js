const input = document.querySelector('#input');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multi = document.querySelector('#multi');
const divide = document.querySelector('#divide');
const equal = document.querySelector('#equal');
const reset = document.querySelector('#reset');

const numbers = [];
const input_nums = [];
let a = '';
let b = '';
let order = 0;
let inputString = '';
let operator = '';
let result = 0;

for (let i = 0; i < 10; i++) {
  const element = document.querySelector('#num' + i);
  element.onclick = () => onNumClick(i.toString());
  numbers.push(element);
}

function onNumClick(num) {
  if (order === 0) {
    order = 1;
    input.innerHTML = '';
  }
  if (order === 1) {
    a += num;
    inputString += num;
    input.innerHTML += num;
  }
  if (order === 2) {
    b += num;
    inputString += num;
    input.innerHTML += num;
  }
}

plus.onclick = () => {
  if (order === 1) {
    operator = '+';
    order = 2;
    input.innerHTML += operator;
  }
};

minus.onclick = () => {
  if (order === 1) {
    operator = '-';
    order = 2;
    input.innerHTML += operator;
  }
};

multi.onclick = () => {
  if (order === 1) {
    operator = '*';
    order = 2;
    input.innerHTML += operator;
  }
};

divide.onclick = () => {
  if (order === 1) {
    operator = '/';
    order = 2;
    input.innerHTML += operator;
  }
};

equal.onclick = () => {
  if (order === 2) {
    switch (operator) {
      case '+':
        result = +a + +b;
        break;
      case '-':
        result = +a - +b;
        break;
      case '*':
        result = +a * +b;
        break;
      case '/':
        result = +a / +b;
        break;
    }
    input.innerHTML = result;
  }
};

reset.onclick = () => {
  order = 0;
  a = 0;
  b = 0;
  operator = 0;
  input.innerHTML = 0;
};
