function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Função para fechar a janela modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  document.getElementById("reiniciar").addEventListener("click", function() {
    var checkboxes = document.getElementsByName("opcao");
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  });
  
  const checkboxes = document.getElementsByName("opcao");
  
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", function() {
      for (let j = 0; j < checkboxes.length; j++) {
        if (j !== i) {
          checkboxes[j].checked = false;
        }
      }
    });
  }
  
  
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function() {
      if (checkboxes[1].checked) {
        alert("Parabéns! Você Acertou!");
      }
      else{
        alert("Resposta Incorreta! Clique no botão REINICIAR e tente novamente!");
      }
    });
  }