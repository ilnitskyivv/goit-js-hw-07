const validInputEl = document.querySelector('#validation-input');

validInputEl.addEventListener('blur', onInputValueCheck);

function onInputValueCheck(event) {
  if (
    event.currentTarget.getAttribute('data-length') >
    event.currentTarget.value.length
  ) {
    validInputEl.classList.add('invalid');
    validInputEl.classList.remove('valid');
  } else {
    validInputEl.classList.add('valid');
    validInputEl.classList.remove('invalid');
  }
}
