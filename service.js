document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const telInput = document.querySelector('input[name="tel"]');
    const dateInput = document.querySelector('input[name="date"]');
    const timeInput = document.querySelector('input[name="time"]');
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (validateForm()) {
        // Code pour envoyer le formulaire (non inclus ici)
        console.log("Formulaire valide, envoi en cours...");
      }
    });
  
    function validateForm() {
      let isValid = true;
  
      if (nameInput.value.trim() === "") {
        isValid = false;
        setErrorFor(nameInput, "Veuillez entrer votre nom complet");
      } else {
        setSuccessFor(nameInput);
      }
  
      if (emailInput.value.trim() === "") {
        isValid = false;
        setErrorFor(emailInput, "Veuillez entrer votre adresse e-mail");
      } else if (!isEmailValid(emailInput.value.trim())) {
        isValid = false;
        setErrorFor(emailInput, "Veuillez entrer une adresse e-mail valide");
      } else {
        setSuccessFor(emailInput);
      }
  
      if (telInput.value.trim() === "") {
        isValid = false;
        setErrorFor(telInput, "Veuillez entrer votre numéro de téléphone");
      } else {
        setSuccessFor(telInput);
      }
  
      // Autres validations pour les champs date et time
  
      return isValid;
    }
  
    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const errorMessage = formControl.querySelector("small");
  
      errorMessage.innerText = message;
      formControl.className = "formulaire error";
    }
  
    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = "formulaire success";
    }
  
    function isEmailValid(email) {
      // Validation basique de l'adresse e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  