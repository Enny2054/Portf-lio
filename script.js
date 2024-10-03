// Criação de uma função
(function() {
  emailjs.init("_Enny");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

// Cria um objeto com os dados do formulário
  const formData = {
      name: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      message: document.getElementById("messagem").value
  };

  // Enviar o e-mail
  emailjs.send("service_ylspdq6", "template_7vyet0t", formData)
      .then(function(response) {
          console.log("E-mail enviado com sucesso!", response.status, response.text);
          alert("Mensagem enviada!");
      }, function(error) {
          console.error("Erro ao enviar o e-mail:", error);
          alert("Houve um erro ao enviar sua mensagem.");
      });
});
