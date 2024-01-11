const names = [];
for (let i = 1; i <= 21; i++) {
  if (i === 11) continue;
  names.push('block' + i);
}

const blocks = names.map((element) => document.querySelector('.' + element));

setInterval(() => {
  blocks.forEach((element) => {
    element.style.backgroundColor = `rgb(${Math.round(
      Math.random() * 255
    )},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
  });
}, 1000);
