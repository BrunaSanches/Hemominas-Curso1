function toggleTexto() {
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
   

    var texto1 = document.getElementById("texto1");
    var texto2 = document.getElementById("texto2");
    
    if (checkbox1.checked) {
        texto1.style.display = "block";
  
    
       
    } else {
        texto1.style.display = "none";
    }

    if (checkbox2.checked) {
        texto2.style.display = "block";
    
    } else {
        texto2.style.display = "none";
    }

  
}


// Adiciona o evento onchange ao checkbox
var checkbox1 = document.getElementById("checkbox1");
checkbox1.onchange = toggleTexto;

var checkbox2 = document.getElementById("checkbox2");
checkbox2.onchange = toggleTexto;



var opcoes = document.getElementsByName("opcao");
		for (var i = 0; i < opcoes.length; i++) {
			opcoes[i].addEventListener("click", function() {
				// Desmarca todos os outros checkbox
				for (var j = 0; j < opcoes.length; j++) {
					if (opcoes[j] != this) {
						opcoes[j].checked = false;
					}
				}
			});
		}
    