

//verifier la saisi du nom validation first name************************

form.first.addEventListener('change', function(){
  validFirst(this);
});
//variable qui utiliser lors de la validation du formulaire
let validPrenom = false;
const validFirst = function(inputFirst){
  let firstRegExp = new RegExp(
  '^[a-z]{2,15}$',
  );
  // variable qui servira a verifier si le regex est bien respecter
  let testFirst = firstRegExp.test(inputFirst.value)
  //variable pour signaler que le champ doit etre rempli
  let small = document.querySelector('.small1');
  if(testFirst) {
      validPrenom = true;
      small.innerHTML = '';
      first.style.borderColor = 'white';
  } else {
    // insertion du style  si erreur lors de la saisi
      first.style.borderColor = 'red';
      small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
  }

};

//**verifier la saisi de la validation last name*************************
form.last.addEventListener('change', function(){
  validLast(this);
});
let validNom = false;
const validLast = function(inputLast){
  let lastRegExp = new RegExp(
    '^[a-z]{2,15}$',
  );
  // variable qui servira a verifier si le regex est bien respecter
  let testLast = lastRegExp.test(inputLast.value)
  let small = document.querySelector('.small2');
  if(testLast) {
      validNom = true;
    small.innerHTML = '';
    last.style.borderColor = 'white';
  } else {
    // insertion du style  si erreur lors de la saisi
    last.style.borderColor = 'red';
    small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
  }
};


//*****************verifiez la bonne saisi de l'emailvalidation Email******************************
form.email.addEventListener('change', function(){
  validEmail(this);
});
let validMail = false;
const validEmail = function(inputEmail){
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
  );
  let testEmail = emailRegExp.test(inputEmail.value)
  let small = document.querySelector('.small3');
  if(testEmail) {
      validMail = true;
    small.innerHTML = '';
    email.style.borderColor = 'white';
  } else {
    email.style.borderColor = 'red';
    small.innerHTML = 'Veuillez saisir un email valide';
  }
};

//***********Fonction pour valider la Date de naissance***************
form.birthdate.addEventListener('change', function(){
  validBirdth(this)
});
let validAge = false;
const validBirdth = function(inputBirdth){
  let birdthRegExp = new RegExp ( 
    /^19[00-99]{2}|200[0-9]{1}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/
  );
  let testBirdth = birdthRegExp.test(inputBirdth.value)
  let small = document.querySelector('.small4');
  if(testBirdth) {
      validAge = true;
    small.innerHTML = '';
    birthdate.style.borderColor = 'white';
  } else {
    birthdate.style.borderColor = 'red';
    small.innerHTML = 'Entrer une date valide';
  }

};

//********pour vérifier la saisi du Number tournament*************************
form.quantity.addEventListener('change', function(){
  validQuantity(this);
});
let validQuantite = false;
const validQuantity = function(inputQuantity){
  let quantityRegExp = new RegExp(
    '[0-9]'
  );
  let testQuantity = quantityRegExp.test(inputQuantity.value);
  let small = document.querySelector('.small5');
  if(testQuantity) {
    validQuantite = true;
    small.innerHTML = '';
    quantity.style.borderColor ='white';
  } else {
    quantity.style.borderColor = 'red';
    small.innerHTML = 'Veuillez saisir un nombre';
  }
};

//VALIDATION MODAL, verifier si chaque input a été rempli correctement avant validation
document.getElementById ("reserve").addEventListener("submit", function(e){
  e.preventDefault();
  if  (validPrenom)
  if  (validNom)
  if  (validMail)
  if  (validAge)
  if  (validQuantite)
    {
      modalnone();
      modalFinal();
    } else {
          
          }
  }
);