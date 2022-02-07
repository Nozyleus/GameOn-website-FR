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


//validation first name************************

form.first.addEventListener('change', function(){
  validFirst(this);
});

const validFirst = function(inputFirst){
  let firstRegExp = new RegExp(
    '^[a-z]{2,15}$',
    );
    let testFirst = firstRegExp.test(inputFirst.value)
    let small = document.querySelector('.small1');
    if(testFirst) {
      small.innerHTML = '';
      first.style.borderColor = 'white'
    } else {
      first.style.borderColor = 'red'
      small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
    }
  
  };

//********************validation last name*************************
form.last.addEventListener('change', function(){
  validLast(this);
});

const validLast = function(inputLast){
  let lastRegExp = new RegExp(
    '^[a-z]{2,15}$',
  );
  let testLast = lastRegExp.test(inputLast.value)
  let small = document.querySelector('.small2');
  if(testLast) {
    small.innerHTML = '';
    last.style.borderColor = 'white'
  } else {
    last.style.borderColor = 'red'

    small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
  }
};


//*****************validation Email******************************
form.email.addEventListener('change', function(){
  validEmail(this);
});

const validEmail = function(inputEmail){
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
  );
  let testEmail = emailRegExp.test(inputEmail.value)
  let small = document.querySelector('.small3');
  if(testEmail) {
    small.innerHTML = '';
    email.style.borderColor = 'white'
  } else {
    email.style.borderColor = 'red'
    small.innerHTML = 'Veuillez saisir un email correct';
  }
};

//*******************Date de naissance***************
form.birthdate.addEventListener('change', function(){
  validBirdth(this)
});
const validBirdth = function(inputBirdth){
  let birdthRegExp = new RegExp ( 
    '[0-9]{4}-[0-9]{2}-[0-9]{2}'
  );
  let testBirdth = birdthRegExp.test(inputBirdth.value)
  let small = document.querySelector('.small4');
  if(testBirdth) {
    small.innerHTML = '';
    birthdate.style.borderColor = 'white'
  } else {
    birthdate.style.borderColor = 'red'
    small.innerHTML = 'Vous devez entrer votre date de naissance';
  }

};

//Number tournament*************************
form.quantity.addEventListener('change', function(){
  validQuantity(this);
});
const validQuantity = function(inputQuantity){
  let quantityRegExp = new RegExp(
    '[0-9]',
  );
  let testQuantity = quantityRegExp.test(inputQuantity.value)
  let small = document.querySelector('.small5');
  
  if(testQuantity) {
    small.innerHTML = '';
    quantity.style.borderColor ='white'
  } else {
    quantity.style.borderColor = 'red'
    small.innerHTML = 'Veuillez saisir un nombre';
  }
};


  //****************VALIDATION MODAL******************* */
document.getElementById ("reserve").addEventListener("submit", function(e){
  e.preventDefault();
  
  let inputs = Array.from(this.getElementsByClassName("text-control"))
  let small = document.querySelector ('.small6')
  inputs.forEach(function (control) {

      if (control.value) {
        
        modalnone();
        modalFinal();
      }

      else {
       small.innerHTML = 'Remplissez tout les champs du formulaire'
        
      }
    })
});