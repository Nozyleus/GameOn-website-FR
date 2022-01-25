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



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
const modalClose = document.querySelectorAll(".close-modal");
modalClose.forEach((e) => e.addEventListener("click", modalFinal));

// Close modal form
function modalFinal() {
  modalbg.style.display = "none" ;
}


// Close modal thanks
const modalthks = document.querySelector(".back_ground_thanks")
const btnThanks = document.querySelectorAll(".btn_thanks");
btnThanks.forEach((button) => button.addEventListener("click", modalThanks));
function modalThanks() {
  modalthks.style.display ="none";
}

