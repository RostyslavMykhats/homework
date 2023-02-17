let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    formInputMail = document.querySelector('.js-input-mail'),
    formInputPass = document.querySelector('.js-input-pass'),
    formInputConfirm = document.querySelector('.js-input-confirm'),
    formCheckbox = document.querySelector('.js-checkbox'),
    formInputName = document.getElementById('name'),
    formInputLastname = document.getElementById('lastname');

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {
    let mailVal = formInputMail.value,
        passVal = formInputPass.value,
        confVal = formInputConfirm.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        }
        else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        return false;
    }

    if (!validateEmail(mailVal)) {
        alert("Будь ласка введіть коректну почту")
        formInputMail.classList.add('error');
        return false;
    }

    else {
        formInputMail.classList.remove('error');
    }

    if (confVal != passVal) {
        formInputConfirm.classList.add('error');
        alert('Паролі не співпадають');
        return false;
    }
    else {
        formInputConfirm.classList.remove('error');
    }

    if (!formCheckbox.checked) {
        alert('Погодьтесь на умови')
        return false;
    }

    else {
        alert(`name : ${formInputName.value},  
lastname : ${formInputLastname.value},
e-mail : ${mailVal},
password : ${passVal}`)
    }
}