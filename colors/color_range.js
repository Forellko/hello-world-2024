const redChange = document.getElementById('red-range');
const greenChange = document.getElementById('green-range');
const blueChange = document.getElementById('blue-range');
const colorBlock = document.getElementById('color-block');
const changeColor = () => {
  const rgb = `rgb(${redChange.value}, ${greenChange.value}, ${blueChange.value})`;
  colorBlock.innerText = rgb;
  colorBlock.style.backgroundColor = rgb;

  colorBlock.style.color =
    +redChange.value + +greenChange.value + +blueChange.value < 255
      ? '#ffffff'
      : '#000000';
};
changeColor();

redChange.addEventListener('change', changeColor);
greenChange.addEventListener('change', changeColor);
blueChange.addEventListener('change', changeColor);
