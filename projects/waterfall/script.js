const main = document.querySelector('#main');
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const direction = ['falldown', 'fallright', 'fallup', 'fallleft'];
setInterval(() => {
  main.innerHTML = '';
  for (let i = 0; i < 100; i++) {
    const block = document.createElement('div');
    block.className = 'block';
    block.style.width = Math.floor(Math.random() * 500 + 100) + 'px';
    block.style.height = Math.floor(Math.random() * 500 + 100) + 'px';
    block.style.backgroundColor = getRandomColor();
    block.style.opacity = Math.random();
    block.style.animationName = direction[Math.round(Math.random() * 3)];
    block.style.animationDuration = Math.random() * 3 + 1 + 's';
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
