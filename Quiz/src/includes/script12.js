
  document.getElementById("reiniciar").addEventListener("click", function() {
    var checkboxes = document.getElementsByName("opcao");
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  });
  
  const checkboxes = document.getElementsByName("opcao");
  
  
  
  
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", function() {
      if (checkboxes[0].checked) {
        alert("Parabéns! Você Acertou! Esta é uma reposição possível!\n\n Feedback: Tanto a escolha de repor 01 ampola quanto 02 ampolas são adequadas. A escolha vai depender da logística mais adequada de reposição. ");
      }
      else if ( checkboxes[1].checked) {
        alert("Parabéns! Você Acertou! Esta é uma reposição possível!\n\n Feedback: Tanto a escolha de repor 01 ampola quanto 02 ampolas são adequadas. A escolha vai depender da logística mais adequada de reposição. ");
      }
     
      else if(checkboxes[2].checked){
        alert("Resposta Incorreta! A dose sugerida é maior que a máxima permitida por dose. \n\n Clique no botão REINICIAR e tente novamente!");

      }
      else if(checkboxes[3].checked){
        alert("Resposta Incorreta! A dose sugerida é maior que a máxima permitida por dose. \n\n Clique no botão REINICIAR e tente novamente!");
      }
     
    });
  }

  // pergunta 2

  document.getElementById("reiniciar2").addEventListener("click", function() {
    var checkboxes = document.getElementsByName("opcao1");
    for (var x = 0; x < checkboxes.length; x++) {
      checkboxes[x].checked = false;
    }
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
        alert("Resposta Incorreta! Clique no botão REINICIAR e tente novamente!");
      }
      else if(checkboxes2[1].checked){
        alert("Resposta Incorreta! Clique no botão REINICIAR e tente novamente!");
      }
      else if(checkboxes2[2].checked){
        alert("Parabéns! Você Acertou!");
       
      }
 
    });
  }