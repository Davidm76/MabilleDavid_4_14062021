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
close.forEach((span) => span.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Regex //

let checkString = /^[a-zA-Z]{2}/; // regex texte //
let checkMail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // regex mail //

// prénom //

let prenom = document.getElementById("first");
let error1 = document.getElementById("error_1");
function checkPrenom() {
  if (checkString.test(prenom.value) === false) {
    prenom.classList.add("error");
    error1.textContent = "Saississez un prénom valide";
    return false;
  } else {
    prenom.classList.remove("error");
    error1.textContent = "";
    prenom.classList.add("valide");
    return true;
  }
}

// nom //

let nom = document.getElementById("last");
let error2 = document.getElementById("error_2");

function checkNom() {
  if (checkString.test(nom.value) === false) {
    nom.classList.add("error");
    error2.textContent = "saississez un nom valide";
    return false;
  } else {
    nom.classList.remove("error");
    error2.textContent = "";
    nom.classList.add("valide");
    return true;
  }
}

// email //

let email = document.getElementById("email");
let error3 = document.getElementById("error_3");

function checkEmail() {
  if (checkMail.test(email.value) === false) {
    email.classList.add("error");
    error3.textContent = "saississez un email valide";
    return false;
  } else {
    email.classList.remove("error");
    error3.textContent = "";
    email.classList.add("valide");
    return true;
  }
}

// Date de naissance //

let birthdayDate = document.querySelector("input[type=date]");
let birthday = document.getElementById("birthday");
let error4 = document.getElementById("error_4");

function checkBirthday() {
  if (birthdayDate.value === "") {
    birthday.classList.add("error");
    birthday.classList.remove("valide");
    error4.textContent = "saississez une date de naissance valide";
    return false;
  } else {
    birthday.classList.remove("error");
    error4.textContent = "";
    birthday.classList.add("valide");
    return true;
  }
}

// Participation //

let participationNumber = document.querySelector("input[type=number]");
let participation = document.getElementById("quantity");
let error5 = document.getElementById("error_5");

function checkParticipation() {
  if (!participationNumber.value) {
    participation.classList.add("error");
    participation.classList.remove("valide");
    error5.textContent = "veuillez remplir le champs";
    console.log(participationNumber.value);
    return false;
  } else {
    participation.classList.remove("error");
    error5.textContent = "";
    participation.classList.add("valide");
    console.log("test " + participationNumber.value);
    return true;
  }
}

// villes //

/*var checkRadio = document.querySelectorAll("input[type=radio]");
var chkRadioL = checkRadio.length;

document.querySelector("form").addEventListener("change", function () {
  for (var i = 0; i < checkRadio.length; i++) {
    if (checkRadio[i].checked === true) {console.log("1");
      break;
    } 
  }
});*/

// la fonction permet de vérifié chaque input radio et voir si checked //

let checkRadio = document.querySelectorAll("input[type=radio]");
let error7 = document.getElementById("error_7");

function villes() {
  for (i = 0; i < checkRadio.length; i++) {
    if (checkRadio[i].checked) {
      console.log(checkRadio.value);
      error7.innertext = "";
      return true; // stop la boucle si une valeur est trouvé //
    }
  }
  // si aucun input radio est coché alors message d'erreur //
  error7.innertext = "Vous devez choisir une option";
  return false;
}

/*function checkVille() {
  let checkRadio = document.querySelectorAll("input[type=radio]");
  let error7 = document.getElementById("error_7");
  for (i = 0; i < checkRadio.length; i++) {
    if (checkRadio[i].checked) {
      error7.innerText= "";
      return true;
    }
  }
  error7.innerText = "Vous devez choisir une option";
  return false;
}*/

// Condition d'utilisation //

let terme = document.getElementById("checkbox1");
let error6 = document.getElementById("error_6");

function conditionUtil() {
  if (!terme.checked) {
    terme.classList.add("error_checkbox");
    error6.textContent = "Cocher les conditions d'utilisations";
    return false;
  } else {
    terme.classList.remove("error_checkbox");
    error6.textContent = "";
    terme.classList.add("valide_checkbox");
    return true;
  }
}

// Validation formulaire //




function validationFormulaire(event) {
  const myform = document.forms[0];
  if (checkPrenom() === false) {
    return false;
  } else if (checkNom() === false) {
    return false;
  } else if (checkEmail() === false) {
    return false;
  } else if (checkBirthday() === false) {
    return false;
  } else if (checkParticipation() === false) {
    return false;
  } else if (checkVille() === false) {
    return false;
  } else if (conditionUtil() === false) {
    return false;
  } else {
    event.preventDefault();
    myform.remove();
    let modal = document.querySelector("div.modal-body");
    let message = document.createElement("p");
    message.classlist.add("message_validation");
    message.textContent = "Merci pour votre inscription";
    modal.appendChild(message);
  }
}
