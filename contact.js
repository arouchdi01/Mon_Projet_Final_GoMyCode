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
  
  document.addEventListener("DOMContentLoaded", function () {
    // Votre code JavaScript existant
  
    // Événement écouteur pour charger la carte Google Maps
    window.addEventListener("load", initializeMap);
  });
  
  function initializeMap() {
    // Coordonnées du lieu à afficher sur la carte
    const myLatLng = { lat: 14.721609139848399, lng: -17.480290536733968 };
  
    // Options de la carte
    const mapOptions = {
      center: myLatLng,
      zoom: 14,
    };
  
    // Sélection de l'élément iframe de la carte
    const mapIframe = document.querySelector(".map iframe");
  
    // Attribution de la source de la carte avec les options définies
    mapIframe.src = `https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30870.723846337063!2d-17.480290536733968!3d14.721609139848399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d14.6931712!2d-17.4718976!4m5!1s0xec10d7c612f119b%3A0xa76e5f05dfe73db2!2sunivers%20startech%20informatique!3m2!1d14.7506404!2d-17.4708407!5e0!3m2!1sfr!2ssn!4v1715274386521!5m2!1sfr!2ssn`;
  }
  