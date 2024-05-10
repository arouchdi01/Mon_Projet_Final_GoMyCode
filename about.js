// JavaScript pour gérer la soumission de formulaires

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Obtenir les données du formulaire
      const formData = new FormData(form);
      const formDataJSON = {};
  
      // Convertir FormData en JSON
      for (const [key, value] of formData.entries()) {
        formDataJSON[key] = value;
      }
  
      // Envoyer les données du formulaire au serveur (par exemple, à l'aide de l'API fetch)
      fetch("#", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataJSON),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La réponse du réseau n'était pas correcte");
          }
          return response.json();
        })
        .then((data) => {
          // Gérer la soumission réussie du formulaire
          console.log("Envoi du formulaire réussi:", data);
          // Vous pouvez rediriger l'utilisateur, afficher un message de réussite, etc.
        })
        .catch((error) => {
          // Gérer l'erreur
          console.error("Il y a eu un problème avec l'envoi du formulaire:", error);
          // Vous pouvez afficher un message d'erreur à l'utilisateur, réessayer de soumettre, etc
        });
    });
  });
  