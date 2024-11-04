function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// function validate form 
function validate() {
  
  const firstName = document.getElementById("first")
  const firstNameInput = document.getElementById("first").value
  const lastName = document.getElementById("last")
  const lastNameInput = document.getElementById("last").value
  const email = document.getElementById("email")
  const emailInput = document.getElementById("email").value
  const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  const regexDate = new RegExp("^\\d{4}-\\d{2}-\\d{2}$");
  const birthdate = document.getElementById("birthdate")
  const birthdateInput = document.getElementById("birthdate").value
  const quantity = document.getElementById("quantity")
  const quantityInput = document.getElementById("quantity").value
  const terms = document.getElementById("checkbox1")
  const checkTerms = document.getElementById("checkbox-terms")
  const city = document.getElementsByName("location")
  const firstError = document.getElementById("first-error")
  const lastError = document.getElementById("last-error")
  const emailError = document.getElementById("email-error")
  const birthdateError = document.getElementById("birthdate-error")
  const quantityError = document.getElementById("quantity-error")
  const termsError = document.getElementById("terms-error")
  const cityError = document.getElementById("city-error")
  
  let citySelect = false
  for ( const radio of city){
    if (radio.checked) {
      citySelect = true
      break
    }
  }

  if (firstNameInput === "" || firstNameInput.length < 2) {
    firstError.style.display = "flex"
    firstName.style.border = "solid red 2px"
    return false
  } else {
    firstError.style.display = "none"
    firstName.style.border = ""
  }

  if (lastNameInput === "" || lastNameInput.length < 2) {
    lastError.style.display = "flex"
    lastName.style.border = "solid red 2px"
    return false
  } else {
    lastError.style.display = "none"
    lastName.style.border = ""
  }

  if (!regexEmail.test(emailInput)) {
    emailError.style.display = "flex"
    email.style.border = "solid red 2px"
    return false
  } else {
    emailError.style.display = "none"
    email.style.border = ""
  }

  if (!regexDate.test(birthdateInput)) {
    birthdateError.style.display = "flex"
    birthdate.style.border = "solid red 2px"
    return false
  } else {
    birthdateError.style.display = "none"
    birthdate.style.border = ""
  }

  if (quantityInput === "") {
    quantityError.style.display = "flex"
    quantity.style.border = "solid red 2px"
    return false
  }
  else {
    quantityError.style.display = "none"
    quantity.style.border = ""
  }

  if (!terms.checked) {
    termsError.style.display = "flex"
    checkTerms.style.border = "solid red 2px"
    return false
  }
  else {
    termsError.style.display = "none"
    checkTerms.style.border = ""
  }

  if (!citySelect) {
    cityError.style.display = "flex"
    return false
  }
  else {
    cityError.style.display = "none"
  }

  return true
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal fonction
function closeModal() {
  modalbg.style.display = "none";
}

// closing modal action
closeBtn.addEventListener("click", closeModal)
