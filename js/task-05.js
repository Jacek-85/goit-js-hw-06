const refs = {
    input: document.querySelector('input#validation-input'),
    output: document.querySelector('span#name-output'),
};

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    if (event.currentTarget.value.length === Number(refs.input.getAttribute('data-length'))) {
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid');
    } else {
        refs.input.classList.add('invalid');
        refs.input.classList.remove('valid');
    }
    
}