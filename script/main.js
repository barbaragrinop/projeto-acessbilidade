document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");
    const errorMessages = {
      name: document.getElementById("erro-name"),
      email: document.getElementById("erro-email"),
      phone: document.getElementById("erro-phone"),
      message: document.getElementById("erro-message")
    };
  
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      resetErrorMessages();
  
      if (!validateName()) {
        showError("name", "Por favor, informe seu nome.");
      }
  
      if (!validateEmail()) {
        showError("email", "Por favor, informe um endereço de e-mail válido.");
      }
  
      if (!validatePhone()) {
        showError("phone", "Por favor, informe um número de telefone válido.");
      }
  
      if (!validateMessage()) {
        showError("message", "Por favor, digite uma mensagem.");
      }
  
      // Se todas as validações passarem, você pode prosseguir com o envio do formulário
      if (isFormValid()) {
        form.submit();
        alert("Obrigada!")
      }
    });
  
    function validateName() {
      return nameInput.value.trim() !== "";
    }
  
    function validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(emailInput.value);
    }
  
    function validatePhone() {
      const phonePattern = /^\d{10,}$/;
      return phonePattern.test(phoneInput.value);
    }
  
    function validateMessage() {
      return messageInput.value.trim() !== "";
    }
  
    function showError(field, message) {
      errorMessages[field].textContent = message;
      errorMessages[field].setAttribute("role", "alert");
      errorMessages[field].classList.add("error-message");
      errorMessages[field].focus();
    }
  
    function resetErrorMessages() {
      for (const field in errorMessages) {
        errorMessages[field].textContent = "";
        errorMessages[field].removeAttribute("role");
        errorMessages[field].classList.remove("error-message");
      }
    }
  
    function isFormValid() {
      return (
        validateName() &&
        validateEmail() &&
        validatePhone() &&
        validateMessage()
      );
    }
  });
  