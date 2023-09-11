function verificarRespostas1() {
  var tabela = document.getElementById("respostas");
  var respostas = tabela.getElementsByClassName("resposta");
  var corretas = 0;
  var respostasCorretas1 = [
    ["1", "2", "2","1", "1", "2", "1", "2" ]
  ];

  for (var i = 0; i < respostas.length; i++) {
    var resposta = respostas[i].value;
    var linha = Math.floor(i / 8);
    var coluna = i % 8;

    if (resposta === respostasCorretas1[linha][coluna]) {
      respostas[i].style.backgroundColor = "#cfc"; // Marcar como correta
      corretas++;
    } else {
      respostas[i].style.backgroundColor = "#f99"; // Marcar como incorreta
    }
  }

  alert("Você acertou " + corretas + " respostas.");
}


document.getElementById("reiniciar").addEventListener("click", function() {
  window.location.reload();
});
