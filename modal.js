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
const closeBtn = document.querySelector(".close")
const firstName = document.getElementById("first")

// function validate form 
function validate() {
  const emailInput = document.getElementById("email").value
  const regexEmail = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

  if (regexEmail.test(emailInput)) {
    return true
  }
  return false
}

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
