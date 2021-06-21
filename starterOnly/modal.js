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
const close = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
close.forEach(span => span.addEventListener("click", closeModal));


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Regex //

let checkString = /^[a-zA-Z]{2}/;
let checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// prénom //

function verifPrenom() {
  let prenom = form.elements["prenom"];
  let error = document.getElementById("erreur_prenom");
  if (checkString.test(prenom.value) === false) {
    prenom.classList.add("input_erreur");
    error.innerText = "Saississez un prénom valide";
    return false;
  } else {
    prenom.classList.remove("input_erreur");
    prenom.classList;add("input_valide");
    error.innerText = "";
    return true;
  }
}

// nom //

function verifNom() {
  let nom = form.elements["nom"];
  let error = document.getElementById("erreur_nom");
  if (checkString.test(nom.value) === false) {
    nom.classList.add("input_erreur");
    error.innerText = "Saississez un nom valide";
    return false;
  } else {
    nom.classList.remove("input_erreur");
    nom.classList;add("input_valide");
    error.innerText = "";
    return true;
  }
}

// email //

function verifEmail() {
  let email = form.elements["email"];
  let error = document.getElementById("erreur_email");
  if (checkMail.test(email.value) === false) {
    email.classList.add("input_erreur");
    error.innerText = "Saississez un email valide";
    return false;
  } else {
    email.classList.remove("input_erreur");
    email.classList;add("input_valide");
    error.innerText = "";
    return true;
  }
}

// date //

// participation //

// villes //

// condition d'utilisation //

// newsletter //

//test //

//var validation = document.getElementById('bouton_envoi');
//var prenom = document.getElementById('first');
//var prenom_m = document.getElementById('prenom_manquant');
//validation.addEventListener('click', f_valid);

//function f_valid(e) {
//  if (prenom.validity.valueMissing) {
//    e.preventDefault();
//    prenom_m.textContent = 'veuillez renseigner un prénom';
//    prenom_m.style.color = 'red';
//  }
//}

// nom //

//var validation = document.getElementById('bouton_envoi');
//var nom = document.getElementById('last');
//var nom_m = document.getElementById('nom_manquant');
//validation.addEventListener('click', f_valid);

//function f_valid(e) {
//  if (nom.validity.valueMissing) {
//    e.preventDefault();
//    nom_m.textContent = 'veuillez renseigner un nom';
//    nom_m.style.color = 'red';
//  }
//}

// email //

//var validation = document.getElementById('bouton_envoi');
//var email = document.getElementById('email');
//var email_m = document.getElementById('email_manquant');
//validation.addEventListener('click', f_valid);

//function f_valid(e) {
//  if (email.validity.valueMissing) {
//    e.preventDefault();
//    email_m.textContent = 'veuillez renseigner un email';
//    email_m.style.color = 'red';
//  }
//}

// message de validation //
//    document.getElementById("") .addEventListener("submit", function(e) {
//      e.preventDefault();

//      var erreur;
//      var first = document.getElementById("first")
//      var last = document.getElementById("last")
//      var email = document.getElementById("email")

//      if (!first.value) {
//        erreur = "Veuillez renseigner un prénom"
//      }
//      if (!last.value) {
//        erreur = "Veuillez renseigner un nom"
//      }
//      if (!email.value) {
//        erreur = "Veuillez renseigner un email"
//      }

//      if (erreur) {
//        e.preventDefault();
//        document.getElementById("erreur") .innerHTML = erreur
//      } else {
//          alert('Thank you for submitting your registration details');
//        }
   


// fin test //
