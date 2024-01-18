const createBlock = document.querySelector('#create-block-button');
const block = document.querySelector('#block');
let newBlock = null;

const dragstartHandler = (ev) => {
  console.log(ev.target.id);
  ev.dataTransfer.setData('block-id', ev.target.id);
  ev.target.effectAllowed = 'move';
};
function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'move';
}

function dropHandler(ev) {
  ev.preventDefault();
  // Get the id of the target and add the moved element to the target's DOM
  const data = ev.dataTransfer.getData('block-id');
  console.log(ev);
  ev.target.appendChild(document.getElementById(data));
}

createBlock.onclick = () => {
  newBlock = document.createElement('div');
  newBlock.style.position = 'absolute';
  newBlock.id = Math.random();
  newBlock.draggable = true;
  newBlock.ondragstart = dragstartHandler;
  newBlock.style.width = newBlock.style.width = 100 + 'px';
  newBlock.style.height = 100 + 'px';
  newBlock.style.backgroundColor = 'red';
  block.appendChild(newBlock);
};

const gridTargets = new Array(...document.querySelectorAll('.grid-target'));
gridTargets.map((element) => {
  element.ondrop = (e) => dropHandler(e);
  element.ondragover = (e) => dragoverHandler(e);
});
