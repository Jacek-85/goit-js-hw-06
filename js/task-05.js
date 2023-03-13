const txtInput = document.querySelector('#name-input');
const txtSpan = document.querySelector('#name-output');

txtInput.addEventListener('input', eventInput => txtSpan.textContent = (eventInput.target.value === '') ? "Anonymous" : eventInput.target.value);