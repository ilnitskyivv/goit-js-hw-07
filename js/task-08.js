const inputEl = document.querySelector('#controls input');
const renderBtnEl = document.querySelector('[data-action="render"]');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const targetEl = document.querySelector('#boxes');

const createBoxes = amount => {
  const randomColor = () => Math.floor(Math.random() * 255);
  for (let i = 0, boxSize = 30; i < amount; i += 1, boxSize += 10) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    targetEl.append(box);
  }
};

const destroyBoxes = () => {
  inputEl.value = 0;
  targetEl.innerHTML = '';
};
const boxCreation = () => createBoxes(inputEl.value);
renderBtnEl.addEventListener('click', boxCreation);
destroyBtnEl.addEventListener('click', destroyBoxes);
