function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let user_first = document.querySelector("#first")
let user_last = document.querySelector("#last")
let user_mail = document.querySelector("#email")
let user_condition = document.querySelector("#checkbox1")
let user_city = document.querySelectorAll("[name=location]")
let user_tournaments = document.querySelector("#quantity")
let user_birth = document.querySelector('#birthdate')
const email_validator = new RegExp("^[A-Za-z0-9-_.]{1,}@[a-z]{1,}\.[a-z]{2,}$")



function validate() {
  event.preventDefault();
  if (user_first.value.length <= 1) {
    user_first.parentNode.setAttribute('data-error-visible', 'true')
  } else {
    user_first.parentNode.setAttribute('data-error-visible', 'false')
  }

  if (user_last.value.length <= 1) {
    user_last.parentNode.setAttribute('data-error-visible', 'true')
  } else {
    user_last.parentNode.setAttribute('data-error-visible', 'false')
  }

  if (!email_validator.test(user_mail.value)) {
    user_mail.parentNode.setAttribute('data-error-visible', 'true')
  } else {
    user_mail.parentNode.setAttribute('data-error-visible', 'false')
  }

  if (user_birth.value == "") {
    user_birth.parentNode.setAttribute('data-error-visible', 'true')
  } else {
    user_birth.parentNode.setAttribute('data-error-visible', 'false')
  }

  if (isNaN(user_tournaments.value)) {
    user_tournaments.parentNode.setAttribute('data-error-visible', 'true')
  } else if (user_tournaments.value == "") {
    user_tournaments.parentNode.setAttribute('data-error-visible', 'true')
  } else {
    user_tournaments.parentNode.setAttribute('data-error-visible', 'false')
  }

  var check = 0;
  user_city.forEach(el => check += el.checked ? 1 : 0);
  if (check == 0) {
    user_city[0].parentNode.setAttribute('data-error-visible', 'true')

  } else {
    user_city[0].parentNode.setAttribute('data-error-visible', 'false')
  }

  if (!user_condition.checked) {
    user_condition.parentNode.setAttribute('data-error-visible', 'true')
  } else {
    user_condition.parentNode.setAttribute('data-error-visible', 'false')
  }
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


