const r = document.querySelector(':root');

r.style.setProperty('--color1', 'yellow');

const rs = getComputedStyle(r);
console.log(rs.getPropertyValue('--color2'));
