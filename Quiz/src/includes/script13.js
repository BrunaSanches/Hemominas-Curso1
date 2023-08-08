
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
        alert("Parabéns! Você Acertou!\n\n Feedback: Cada ampola de 5ml/100 mg de Hidróxido Férrico deve ser diluída em 100 ml de SF 0,9%.");
      }
      else if ( checkboxes[1].checked) {
        alert("Parabéns! Você Acertou! \n\n  Feedback: Cada ampola de 5ml/100 mg de Hidróxido Férrico deve ser diluída em 100 ml de SF 0,9%. ");
      }
     
      else if(checkboxes[2].checked){
        alert("Resposta Incorreta! \n Clique no botão REINICIAR e tente novamente!");

      }
      else if(checkboxes[3].checked){
        alert("Resposta Incorreta! \n Clique no botão REINICIAR e tente novamente!");
      }
     
    });
  }
  // pergunta 2

  document.getElementById("reiniciar2").addEventListener("click", function() {
    var checkboxes2 = document.getElementsByName("opcao1");
    for (var x = 0; x < checkboxes2.length; x++) {
      checkboxes2[x].checked = false;
    }
  });
  
  const checkboxes2 = document.getElementsByName("opcao1");
  
  
  
  for (let x = 0; x < checkboxes2.length; x++) {
    checkboxes2[x].addEventListener("change", function() {
      if (checkboxes2[0].checked) {
        alert("Parabéns! Você Acertou!");
      }
      else if(checkboxes2[1].checked){
        alert("Parabéns! Você Acertou!");
      }
      else if(checkboxes2[2].checked){
       
        alert("Resposta Incorreta! Clique no botão REINICIAR e tente novamente!");
      }
      else if(checkboxes2[3].checked){
        alert("Resposta Incorreta! Clique no botão REINICIAR e tente novamente!");
       
      }
 
    });
  }


  // pergunta 3

  document.getElementById("reiniciar3").addEventListener("click", function() {
    var checkboxes3 = document.getElementsByName("opcao2");
    for (var a = 0; a < checkboxes3.length; a++) {
      checkboxes3[a].checked = false;
    }
  });
  
  const checkboxes3 = document.getElementsByName("opcao2");
  
  
  
  for (let a = 0; a < checkboxes3.length; a++) {
    checkboxes3[a].addEventListener("change", function() {
      if (checkboxes3[0].checked) {
        alert("Parabéns! Você Acertou! \n\n Feedback: A dose máxima semanal para reposição do Hidróxido Férrico é de 600 mg ou 6 ampolas.  Esta dose pode ser dada  em dias alternados ou intervalo maior, se a reposição for com duas ampolas por vez  ou diária, se a dose for de uma ampola por aplicação. ");
      }
      else if(checkboxes3[1].checked){
        alert("Parabéns! Você Acertou! \n\n Feedback: A dose máxima semanal para reposição do Hidróxido Férrico é de 600 mg ou 6 ampolas.  Esta dose pode ser dada  em dias alternados ou intervalo maior, se a reposição for com duas ampolas por vez  ou diária, se a dose for de uma ampola por aplicação. ");
      }
      else if(checkboxes3[2].checked){
        alert("Resposta Incorreta! Clique no botão REINICIAR e tente novamente! \n\n Feedback: A dose máxima semanal para reposição do Hidróxido Férrico é de 600 mg ou 6 ampolas.  Esta dose pode ser dada  em dias alternados ou intervalo maior, se a reposição for com duas ampolas por vez  ou diária, se a dose for de uma ampola por aplicação. ");
       
      }
      else if(checkboxes3[3].checked){
        alert("Resposta Incorreta! Clique no botão REINICIAR e tente novamente! \n\n Feedback: A dose máxima semanal para reposição do Hidróxido Férrico é de 600 mg ou 6 ampolas.  Esta dose pode ser dada  em dias alternados ou intervalo maior, se a reposição for com duas ampolas por vez  ou diária, se a dose for de uma ampola por aplicação. ");
       
      }
 
    });
  }
