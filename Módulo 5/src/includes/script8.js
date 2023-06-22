function verificarRespostas1() {
    var tabela = document.getElementById("respostas");
    var respostas = tabela.getElementsByClassName("resposta");
    var corretas = 0;
    var respostasCorretas1 = [
      ["1", "2", "3", "4","5", "6" ]
    ];
   

    for (var i = 0; i < respostas.length; i++) {
      var resposta = respostas[i].value;
      var linha = Math.floor(i / 6);
      var coluna = i % 6;

      if (resposta === respostasCorretas1[linha][coluna]) {
        respostas[i].style.backgroundColor = "#cfc"; // Marcar como correta
        corretas++;
      } else {
        respostas[i].style.backgroundColor = "#f99"; // Marcar como incorreta
      }
    }

    alert("Você acertou " + corretas + " respostas.");
  }

 