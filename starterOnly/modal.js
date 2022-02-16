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
const modalSubmit = document.querySelectorAll ("btn-submit");
const modalthks = document.querySelector(".back_ground_thanks");
const btnThanks = document.querySelectorAll(".btn_thanks");
const modalClose = document.querySelectorAll(".close-modal");
//Permet de chercher les données du formulaire
const form = document.getElementById("reserve");

//*********recupération des Id du formulaire****************** */
const first = document.getElementById ("first");
const last = document.getElementById ('last');
const email = document.getElementById ('email');
const birthdate = document.getElementById ('birthdate');
const quantity = document.getElementById('quantity');
let inputs = document.querySelectorAll('.text-control');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
modalbg.style.display = "block";
}
//*********lancement modal de remerciement********************************* */
modalSubmit.forEach((e) => e.addEventListener("click", modalFinal));
function modalFinal () {
modalthks.style.display = "block";}

// close modal event
modalClose.forEach((e) => e.addEventListener("click", modalnone));

// Close modal form
function modalnone() {
modalbg.style.display = "none" ;
}



// Close modal thanks***************************
btnThanks.forEach((button) => button.addEventListener("click", modalThanks));
function modalThanks() {
modalthks.style.display ="none";
}


