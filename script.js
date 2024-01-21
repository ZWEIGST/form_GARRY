const input = document.querySelector('.input');

const checkError = document.querySelector('.check-error');

const button = document.querySelector('.btn');

function boxValidation() {
    if(input.checked === false) {
        input.style.border = '2px solid red';
        checkError.classList.remove('check-hidden');
        input.focus();
        return false
    }
    else if(input.checked === true) {
        checkError.style.display = 'none';
        return true;
    }
}