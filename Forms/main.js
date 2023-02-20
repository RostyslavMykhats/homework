let buttons = document.querySelectorAll('.btn-choise');

for (let button of buttons) {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        buttons.forEach(i => i.classList.remove('active'));
        this.classList.toggle('active');
    });
};

function hasActiveButton() {
    return Array.from(buttons).some(button => button.classList.contains('active'));
}

// show pass

function togglePasswordVisibility(inputElem, toggleElem) {
    toggleElem.addEventListener('click', function (event) {
        event.preventDefault();
        inputElem.type = inputElem.type === 'password' ? 'text' : 'password';
    });
}
togglePasswordVisibility(document.getElementById('password'), document.getElementById('show-pass'));
togglePasswordVisibility(document.getElementById('confirm-password'), document.getElementById('show-confirm-pass'));

function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

const errorMessage = document.querySelector('#error-message');

function showError() {
    errorMessage.textContent = `Введіть коректний пароль. Пароль повинен містити від 8 символів, включаючи як мінімум одну малу літеру, одну велику літеру і одну цифру. (Букви повинні бути латинські)`;
}

function clearError() {
    errorMessage.textContent = '';
}


// valid form

let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    formInputMail = document.querySelector('.js-input-mail'),
    formInputPass = document.querySelector('.js-input-pass'),
    formInputConfirm = document.querySelector('.js-input-confirm'),
    formInputName = document.getElementById('name'),
    formInputLastname = document.getElementById('lastname'),
    formCheckbox = document.querySelector('.js-checkbox');

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.onsubmit = function () {
    const mailVal = formInputMail.value.trim(),
        passVal = formInputPass.value.trim(),
        confVal = formInputConfirm.value.trim();

    if (Array.from(formInputs).some(input => input.value.trim() === '')) {
        formInputs.forEach(input => input.classList.toggle('error', input.value.trim() === ''));
        return false;
    }

    if (!hasActiveButton()) {
        alert('Будь ласка виберіть, що ви шукаєте');
        return false;
    }

    if (!validateEmail(mailVal)) {
        alert("Будь ласка введіть коректну почту");
        formInputMail.classList.add('error');
        return false;
    } else {
        formInputMail.classList.remove('error');
    }

    if (!validatePassword(passVal)) {
        formInputPass.classList.add('error');
        showError()
        return false;
    }

    else {
        clearError()
        formInputPass.classList.remove('error');
    }

    if (confVal !== passVal) {
        formInputConfirm.classList.add('error');
        alert('Паролі не співпадають');
        return false;
    } else {
        formInputConfirm.classList.remove('error');
    }

    if (!formCheckbox.checked) {
        alert('Погодьтесь на умови');
        return false;
    }

    alert(`name : ${formInputName.value},
lastname : ${formInputLastname.value},
e-mail : ${mailVal},
password : ${passVal}`);
};
