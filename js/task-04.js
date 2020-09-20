const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

incrementBtnEl.addEventListener('click', onIncrementClick);
decrementBtnEl.addEventListener('click', onDecrementClick);

function onIncrementClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
onIncrementClick();

function onDecrementClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
