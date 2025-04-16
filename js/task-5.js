function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector('body');
const btnChangeElem = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
btnChangeElem.addEventListener('click', changeColor);

function changeColor() {
  const randColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randColor;
  colorName.textContent = randColor;
}