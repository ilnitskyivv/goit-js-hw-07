const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onNameOutput);
function onNameOutput(event) {
  if (event.currentTarget.value !== ``) {
    nameOutputEl.textContent = event.currentTarget.value;
  } else {
    nameOutputEl.textContent = 'незнакомец';
  }
}
