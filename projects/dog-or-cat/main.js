const randomButton = document.querySelector('#random-button');
const randomBlock = document.querySelector('#random-block');
const image = document.querySelector('#image');

const pathArr = [
  './images/dog0.jpg',
  './images/dog1.jpg',
  './images/dog2.jpeg',
  './images/dog3.jpg',
  './images/dog4.jpg',
  './images/dog5.jpg',
  './images/cat6.jpg',
  './images/cat7.jpg',
  './images/cat8.jpg',
  './images/cat9.jpg',
  './images/cat10.jpg',
];

randomButton.onclick = () => {
  const rand = Math.round(Math.random() * 9);
  image.src = pathArr[rand];
  randomBlock.innerHTML = rand;
};
