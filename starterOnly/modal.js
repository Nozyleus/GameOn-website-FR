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

//validation first name************************
form.first.addEventListener('change', function(){
  validFirst(this);
});

const validFirst = function(inputFirst){
  let firstRegExp = new RegExp(
    '^[a-z]{2,99}$','g'
  );
  let testFirst = firstRegExp.test(inputFirst.value)

};

//validation last name*************************
form.last.addEventListener('change', function(){
  validLast(this);
});

const validLast = function(inputLast){
  let lastRegExp = new RegExp(
    '^[a-z]{2,99}$','g'
  );
  let testLast = lastRegExp.test(inputLast.value)
console.log(testLast);
};


//validation Email******************************
form.email.addEventListener('change', function(){
  validEmail(this);
});

const validEmail = function(inputEmail){
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g'
  );
  let testEmail = emailRegExp.test(inputEmail.value)

};

//Number tournament*************************
form.quantity.addEventListener('change', function(){
  validQuantity(this);
});

const validQuantity = function(inputQuantity){
  let quantityRegExp = new RegExp(
    '^[0-9]{1,99}$','g'
  );
  let testQuantity = quantityRegExp.test(inputQuantity.value)
    testQuantity
};

//choose location*************************
form.location.addEventListener('change', function(){
  validLocation(this);
});

const validLocation = function(inputLocation){
  let locationRegExp = new RegExp(
    '^[0-9]{1,99}$','g'
  );
  let testLocation = locationRegExp.test(inputLocation.value)
    testLocation
};