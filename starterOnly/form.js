let user_first = document.querySelector("#first")
let user_last = document.querySelector("#last")
let user_mail = document.querySelector("#email")
let user_condition = document.querySelector("#checkbox1")
let user_city = document.querySelectorAll("[name=location]")
let user_tournaments = document.querySelector("#quantity")
let user_birth = document.querySelector('#birthdate')
const emailValidator = /^[A-Za-z0-9-_.]{1,}@[a-z]{1,}\.[a-z]{2,}$/
const stringValidator = /^[A-Za-z]{1,}$/
const numberValidator = /^[0-9]{1,}$/
const closeModalConfirmation = document.querySelector(".confirm-close")
const modalConfirmation = document.querySelector('.confirm-modal')
const btnClose = document.querySelector('.confirm-modal-btn')


//check input values 

function checkFirstName() {
    const isValid = user_first.value.length <= 1 || !stringValidator.test(user_first.value)
    user_first.parentNode.setAttribute('data-error-visible', String(isValid))
    return !isValid
}

function checkLastName() {
    const isValid = user_last.value.length <= 1 || !stringValidator.test(user_last.value)
    user_last.parentNode.setAttribute('data-error-visible', String(isValid))
    return !isValid
}

function checkEmail() {
    const isValid = !emailValidator.test(user_mail.value)
    user_mail.parentNode.setAttribute('data-error-visible', String(isValid))
    return !isValid

}

function checkBirthDate() {
    const isValid = !user_birth.value
    user_birth.parentNode.setAttribute('data-error-visible', String(isValid))
    return !isValid
}

function checkisNaN() {
    const isValid = !numberValidator.test(user_tournaments.value)
    user_tournaments.parentNode.setAttribute('data-error-visible', String(isValid))
    return !isValid
}

//check if one of all inputs radio is checked
function checkCity() {
    var check = 0;
    user_city.forEach(el => check += el.checked ? 1 : 0);
    const isValid = check == 0
    user_city[0].parentNode.setAttribute('data-error-visible', String(isValid))
    return !isValid
}

// check if input is checked
function checkConditions() {
    const isValid = !user_condition.checked
    user_condition.parentNode.setAttribute('data-error-visible', String(isValid))
    return !isValid
}

// Open the modal 

function launchModalConfirmation() {
    modalConfirmation.style.display = "block";
}
//Close the modal 
closeModalConfirmation.addEventListener("click", closeModalConfirm);
btnClose.addEventListener("click", closeModalConfirm)

function closeModalConfirm() {
    modalConfirmation.style.display = "none"
}


// function to check if all inputs are good and if it's good modal will be launched

function validate() {
    let isValid = true
    event.preventDefault();

    if (!checkFirstName()) {
        isValid = false
    }

    if (!checkLastName()) {
        isValid = false

    }

    if (!checkEmail()) {
        isValid = false

    }
    if (!checkBirthDate()) {
        isValid = false

    }

    if (!checkisNaN()) {
        isValid = false

    }
    if (!checkCity()) {
        isValid = false

    }
    if (!checkConditions()) {
        isValid = false
    }

    if (isValid) {
        launchModalConfirmation()
        closeModal()
    }

}


