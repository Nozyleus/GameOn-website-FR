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
let form = document.getElementById("reserve");



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


// Close modal thanks***************************
const modalthks = document.querySelector(".back_ground_thanks")
const btnThanks = document.querySelectorAll(".btn_thanks");
btnThanks.forEach((button) => button.addEventListener("click", modalThanks));
function modalThanks() {
  modalthks.style.display ="none";
}
    //****************VALIDATION MODAL******************* */
//validation first name************************

form.first.addEventListener('change', function(){
  validFirst(this);
});

const validFirst = function(inputFirst){
  let firstRegExp = new RegExp(
    '^[a-z]{2,99}$',
  );
  let testFirst = firstRegExp.test(inputFirst.value)
  let small = document.querySelector('.small1');
    if(testFirst) {
      small.innerHTML = 'good';
    } else {
      
      small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
    }
};

//validation last name*************************
form.last.addEventListener('change', function(){
  validLast(this);
});

const validLast = function(inputLast){
  let lastRegExp = new RegExp(
    '^[a-z]{2,99}$',
  );
  let testLast = lastRegExp.test(inputLast.value)
  let small = document.querySelector('.small2');
  if(testLast) {
    small.innerHTML = 'good';
  } else {
    
    small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
  }
};


//validation Email******************************
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
    small.innerHTML = 'good';
  } else {
    
    small.innerHTML = 'Veuillez saisir un email correct';
  }
};

//Date de naissance***************
form.birthdate.addEventListener('change', function(){
  validBirdth(this)
});
const validBirdth = function(inputBirdth){
  console.log(inputBirdth.value)
  let birdthRegExp = new RegExp ( 
    '[0-9]{4}-[0-9]{2}-[0-9]{2}'
  );
  let testBirdth = birdthRegExp.test(inputBirdth.value)
  console.log(testBirdth)
  let small = document.querySelector('.small4');
  if(testBirdth) {
    small.innerHTML = 'good';
  } else {
    small.innerHTML = 'Vous devez entrer votre date de naissance';
  }

};

//Number tournament*************************
form.quantity.addEventListener('change', function(){
  validQuantity(this);
});

const validQuantity = function(inputQuantity){
  let quantityRegExp = new RegExp(
    '^[0-9]$',
  );
  let testQuantity = quantityRegExp.test(inputQuantity.value)
  let small = document.querySelector('.small5');
  if(testQuantity) {
    small.innerHTML = 'good';
  } else {
    
    small.innerHTML = 'Veuillez saisir un chiffre';
  }
};
 
