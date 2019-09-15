let name = document.querySelector('.form__text-input_name');
let tel = document.querySelector('.form__text-input_tel');
let email = document.querySelector('.form__text-input_email');
let personalData = document.querySelector('#data-checkbox');

let submitBtn = document.querySelector('.form__submit-button')

function dataValidation(name, tel, email, personalData) {
    let nameFormat = /^[А-Яа-яЁё]+$/;
    let phoneFormat = /^[0-9]+$/;
    let mailFormat = /^\w+@\w+\.\w{2,4}$/i;

    if (!name.value.match(nameFormat)) {
        showError(name);
    }

    if (!tel.value.match(phoneFormat)) {
        showError(tel);
    }

    if (!email.value.match(mailFormat)) {
        showError(email);
    }

    if (!personalData.checked) {
        let checkbox = document.querySelector('.form__personal-data-custom-checkbox');
        showError(checkbox);
    }
}

function showError(block) {
    block.classList.add('form__text-input_error');
}

function hideError() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach((element) => {
        element.classList.remove('form__text-input_error');
    })
}

submitBtn.onclick = function (event) {
    event.preventDefault();
    hideError();
    dataValidation(name, tel, email, personalData);
}