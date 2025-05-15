function validarFormulario() {
    const nomeInput = document.getElementById('nome');
    const errorText = nomeInput.nextElementSibling;
  
    if (nomeInput.value.trim() === "") {
      nomeInput.classList.add('error');
      errorText.style.display = 'block';
      return false;
    } else {
      nomeInput.classList.remove('error');
      errorText.style.display = 'none';
    }
  
    return true;
  }
  