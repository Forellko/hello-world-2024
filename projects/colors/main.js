const names = [];
for (let i = 1; i <= 21; i++) {
  if (i === 11) continue;
  names.push('block' + i);
}

const blocks = names.map((element) => document.querySelector('.' + element));

const startButton = document.querySelector('#start');

let start = false;
let interval = null;

startButton.onclick = () => {
  start = !start;
  if (start) {
    startButton.innerHTML = 'stop';
    interval = setInterval(() => {
      blocks.forEach((element) => {
        element.style.backgroundColor = getRandomColor();
        element.innerHTML = rgb2hex(element.style.backgroundColor);
        element.style.cursor = 'pointer';
        element.onclick = () => {
          navigator.clipboard.writeText(element.innerHTML);
          element.innerHTML = 'copied!';
        };
      });
    }, 1000);
  } else {
    startButton.innerHTML = 'start';
    clearInterval(interval);
  }
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var hexDigits = new Array(
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f'
);

//Function to convert rgb color to hex format
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? '00' : hexDigits[(x - (x % 16)) / 16] + hexDigits[x % 16];
}
