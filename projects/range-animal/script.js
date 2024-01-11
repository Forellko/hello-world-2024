const arr = [
  { path: './images/cat1.jpg', name: 'Кошечка' },
  { path: './images/cat2.jpg', name: 'Кися' },
  { path: './images/cat3.jpg', name: 'Котик' },
  { path: './images/dog1.jpg', name: 'Песель' },
  { path: './images/dog2.jpeg', name: 'Собачка' },
  { path: './images/dog3.jpg', name: 'Плюшечка' },
  { path: './images/snegir1.webp', name: 'Снежный' },
  { path: './images/snegir2.jpg', name: 'Снегирь' },
  { path: './images/snegir3.jpg', name: 'Птичка' },
  { path: './images/tulen1.jpeg', name: 'Тюленьчик' },
  { path: './images/tulen2.jpg', name: 'Тюлень' },
];

const image = document.querySelector('#image');
const imageName = document.querySelector('#image-name');

image.src = arr[0].path;
imageName.innerHTML = arr[0].name;

const button = document.querySelector('#random');

button.onclick = () => {
  const rand = Math.round(Math.random() * 10);
  image.src = arr[rand].path;
  imageName.innerHTML = arr[rand].name;
};
