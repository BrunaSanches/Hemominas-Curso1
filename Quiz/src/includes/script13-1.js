
document.getElementById("reiniciar").addEventListener("click", function() {
  window.location.reload();
});

const checkboxes = document.getElementsByName("opcao");



for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", function() {
    if (checkboxes[0].checked) {
      alert("Parabéns, essa é a resposta correta 15-20 minutos para 01 ampola dissolvida em 100ml!");
      document.getElementById("correta1").style.color="green";

    }else if(checkboxes[1].checked){
      alert("Resposta Incorreta! \n Clique no botão REINICIAR e tente novamente!");
      document.getElementById("incorreta1").style.color="red";
      
      
    }
    else if(checkboxes[2].checked){
      alert("Resposta Incorreta! \n Clique no botão REINICIAR e tente novamente!");
      document.getElementById("incorreta2").style.color="red";
    }
    else if(checkboxes[3].checked){
      alert("Resposta Incorreta! \n Clique no botão REINICIAR e tente novamente!");
      document.getElementById("incorreta3").style.color="red";
    }
  
   
  });
}
// pergunta 2

document.getElementById("reiniciar2").addEventListener("click", function() {
  window.location.reload();
});

const checkboxes2 = document.getElementsByName("opcao1");



for (let x = 0; x < checkboxes2.length; x++) {
  checkboxes2[x].addEventListener("change", function() {

    if (checkboxes2[0].checked) {
      alert("Resposta Incorreta! \n\n Clique no botão REINICIAR e tente novamente!");

      document.getElementById("incorreta4").style.color="red";

          }else if(checkboxes2[1].checked){
            alert("Parabéns, essa é a resposta correta 30-40 minutos para 02 ampolas dissolvidas em 200 ml!");
            document.getElementById("correta3").style.color="green";
    
    }
    else if(checkboxes2[2].checked){
      alert("Resposta Incorreta! \n\n Clique no botão REINICIAR e tente novamente!");
      document.getElementById("incorreta5").style.color="red";
    }
    else if(checkboxes2[3].checked){
      alert("Resposta Incorreta! \n\n Clique no botão REINICIAR e tente novamente!");
      document.getElementById("incorreta6").style.color="red";
    }
  
   


  });
}
