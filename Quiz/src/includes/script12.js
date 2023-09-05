

  // pergunta 2

  document.getElementById("reiniciar2").addEventListener("click", function() {
    window.location.reload();
  });
  
  const checkboxes2 = document.getElementsByName("opcao1");
  
  for (let x = 0; x < checkboxes2.length; x++) {
    checkboxes2[x].addEventListener("click", function() {
      for (let y = 0; y < checkboxes2.length; y++) {
        if (y !== x) {
          checkboxes2[y].checked = false;
        }
      }
    });
  }
  
  
  for (let x = 0; x < checkboxes2.length; x++) {
    checkboxes2[x].addEventListener("change", function() {
      if (checkboxes2[0].checked) {
        alert("Resposta Incorreta! \nAviso: essa dose está excessiva.\n\n Clique no botão REINICIAR e tente novamente!");
      }
      else if(checkboxes2[1].checked){
        alert("Resposta Incorreta! \nAviso: essa dose está excessiva.\n\n Clique no botão REINICIAR e tente novamente!");
      }
      else if(checkboxes2[2].checked){
        alert("Parabéns! Você Acertou!");
       
      }
 
    });
  }