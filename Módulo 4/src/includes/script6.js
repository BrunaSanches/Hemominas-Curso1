function toggleTexto() {
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
    var checkbox3 = document.getElementById("checkbox3");
    var checkbox4 = document.getElementById("checkbox4");
    var checkbox5 = document.getElementById("checkbox5");
    var checkbox6 = document.getElementById("checkbox6");
    var checkbox7 = document.getElementById("checkbox7");
    var checkbox8 = document.getElementById("checkbox8");
    var checkbox9 = document.getElementById("checkbox9");
   

    var texto1 = document.getElementById("texto1");
    var texto2 = document.getElementById("texto2");
    var texto3 = document.getElementById("texto3");
    var texto4 = document.getElementById("texto4");
    var texto5 = document.getElementById("texto5");
    var texto6 = document.getElementById("texto6");
    var texto7 = document.getElementById("texto7");
    var texto8 = document.getElementById("texto8");
    var texto9 = document.getElementById("texto9");


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

    if (checkbox3.checked) {
        texto3.style.display = "block";
 
    } else {
        texto3.style.display = "none";
    }   
    if (checkbox4.checked) {
        texto4.style.display = "block";

       
    } else {
        texto4.style.display = "none";
    }

    if (checkbox5.checked) {
        texto5.style.display = "block";
    
    } else {
        texto5.style.display = "none";
    }

    if (checkbox6.checked) {
        texto6.style.display = "block";
 
    } else {
        texto6.style.display = "none";
    }  
    if (checkbox7.checked) {
        texto7.style.display = "block";

       
    } else {
        texto7.style.display = "none";
    }

    if (checkbox8.checked) {
        texto8.style.display = "block";
    
    } else {
        texto8.style.display = "none";
    }

    if (checkbox9.checked) {
        texto9.style.display = "block";
 
    } else {
        texto9.style.display = "none";
    }  

}


// Adiciona o evento onchange ao checkbox
var checkbox1 = document.getElementById("checkbox1");
checkbox1.onchange = toggleTexto;

var checkbox2 = document.getElementById("checkbox2");
checkbox2.onchange = toggleTexto;

var checkbox3 = document.getElementById("checkbox3");
checkbox3.onchange = toggleTexto;

var checkbox4 = document.getElementById("checkbox4");
checkbox4.onchange = toggleTexto;

var checkbox5 = document.getElementById("checkbox5");
checkbox5.onchange = toggleTexto;

var checkbox6 = document.getElementById("checkbox6");
checkbox6.onchange = toggleTexto;

var checkbox7 = document.getElementById("checkbox7");
checkbox7.onchange = toggleTexto;

var checkbox8 = document.getElementById("checkbox8");
checkbox8.onchange = toggleTexto;

var checkbox9 = document.getElementById("checkbox9");
checkbox9.onchange = toggleTexto;


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
    