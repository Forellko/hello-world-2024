const menuHover = document.querySelector('.menu-hover');
const menuContent = document.querySelector('.menu-content');

menuHover.onmouseover = (e) => {
  menuContent.classList.remove('menu-content-out');
  menuContent.classList.add('menu-content-hover');
};

menuHover.onmouseout = (e) => {
  menuContent.classList.remove('menu-content-hover');
  menuContent.classList.add('menu-content-out');
};
