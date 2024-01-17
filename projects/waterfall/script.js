const main = document.querySelector('#main');
const colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'pink',
  '#FF1493',
  '#2F4F4F',
  '#4B0082',
  '#F08080',
  '#7B68EE',
  '#FF4500',
  '#98FB98',
];
const direction = ['falldown', 'fallright', 'fallup', 'fallleft'];
setInterval(() => {
  main.innerHTML = '';
  for (let i = 0; i < 100; i++) {
    const block = document.createElement('div');
    block.className = 'block';
    block.style.backgroundColor =
      colors[Math.round(Math.random() * (colors.length - 1))];
    block.style.animationName = direction[Math.round(Math.random() * 3)];
    block.style.animationDuration = Math.round(Math.random() * 10) + 's';
    if (block.style.animationName === 'falldown') {
      block.style.left = Math.round(Math.random() * 100) + 'vw';
    }
    if (block.style.animationName === 'fallup') {
      console.log('fallup');
      block.style.bottom = 0;
      block.style.left = Math.round(Math.random() * 100) + 'vw';
    }
    if (
      block.style.animationName === 'fallright' ||
      block.style.animationName === 'fallleft'
    ) {
      block.style.top = Math.round(Math.random() * 100) + 'vh';
    }

    main.appendChild(block);
  }
}, 5000);
