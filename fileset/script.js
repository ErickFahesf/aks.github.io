function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return false;
  } else {
    // Redirecionar para a página de produtos
    window.location.href = "fileset/products.html";
    return false; // Para impedir o envio do formulário
  }
}

function redefinirSenha() {
  var emailInput = document.getElementById('email');
  var email = emailInput.value.trim();

  // Expressão regular para validar o formato do email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Por favor, informe um email válido.');
    return;
  }

  alert('O link de redefinição foi enviado para o email informado.');

  // Redireciona para a página de login
  window.location.href = './../index.html';
}
