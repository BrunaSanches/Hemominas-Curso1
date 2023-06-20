var t = document.getElementById("tabuleiro");
		var cores, primeiroclique, encontradas, data;
		function clique(e){
			if(cores.length > 0){
				if(primeiroclique == false){
					data.colunainicial = parseInt(e.target.dataset.index);
					data.linhainicial = parseInt(e.target.parentElement.dataset.index);
					data.letrainicial = e.target.innerText;
					
					if(e.target.dataset.encontrada == "true"){
						e.target.classList.replace("encontrada", "selecionada");
					}else{
						e.target.classList.add("selecionada");
					}
					
					primeiroclique = true;
				}else{
					if(data.colunainicial != parseInt(e.target.dataset.index) && data.linhainicial != parseInt(e.target.parentElement.dataset.index)){
						return;
					}
					
					data.colunafinal = parseInt(e.target.dataset.index);
					data.linhafinal = parseInt(e.target.parentElement.dataset.index);
					data.letrafinal = e.target.innerText;
					
					if(data.colunainicial > data.colunafinal){
						var novacolunainicial = data.colunafinal;
						var novacolunafinal = data.colunainicial;
						data.colunainicial = novacolunainicial;
						data.colunafinal = novacolunafinal;
					}
					if(data.linhainicial > data.linhafinal){
						var novalinhainicial = data.linhafinal;
						var novalinhafinal = data.linhainicial;
						data.linhainicial = novalinhainicial;
						data.linhafinal = novalinhafinal;
					}
					
					primeiroclique = false;
					
					if(e.target.dataset.encontrada == "true"){
						e.target.classList.replace("encontrada", "selecionada");
					}else{
						e.target.classList.add("selecionada");
					}
					comparar(data);
				}
			}
		}
		function horizontal(fn){
			console.log("seleção horizontal");
			for(var i = data.colunainicial; i < data.colunafinal + 1; i++){
				var td = t.rows[data.linhainicial].cells[i];
				if(td.dataset.encontrada == "true"){
					td.classList.replace("encontrada", "selecionada");
				}else{
					td.classList.add("selecionada");
				}
				fn(td);
			}
		}
		function vertical(fn){
			console.log("seleção vertical");
			for(var i = data.linhainicial; i < data.linhafinal + 1; i++){
				var td = t.rows[i].cells[data.colunainicial];
				if(td.dataset.encontrada == "true"){
					td.classList.replace("encontrada", "selecionada");
				}else{
					td.classList.add("selecionada");
				}
				fn(td);
			}
		}
		function comparar(data){
			var selecionados = {
				palavra:"",
				elementos:[]
			};
			if(data.colunainicial != data.colunafinal && data.linhainicial == data.linhafinal){
				horizontal(function(td){
					selecionados.palavra += td.innerText;
					selecionados.elementos.push(td);
				});
			}else if(data.colunainicial == data.colunafinal && data.linhainicial != data.linhafinal){
				vertical(function(td){
					selecionados.palavra += td.innerText;
					selecionados.elementos.push(td);
				});
			}
			if(cores.includes(selecionados.palavra)){
				cores = cores.filter(function(p){
					if(selecionados.palavra != p){
						return p;
					}
				});
				setTimeout(function(){
					for(var i = 0; i < selecionados.elementos.length; i++){
						var elemento = selecionados.elementos[i];
						elemento.classList.replace("selecionada", "encontrada");
						elemento.dataset.encontrada = "true";
					}
				}, 1000);
				encontradas += 1;
				document.getElementById("encontradas").innerText = "Encontradas: "+encontradas+"\n Restantes: "+ cores.length;
				if(cores.length == 0){
					setTimeout(function(){
						document.getElementById("parabens").hidden = false;
						document.getElementById("btnVoltar").hidden = false;
					}, 2000);
				}
				data = {};
			}else{
				data = {};
				setTimeout(function(){
					for(var i = 0; i < selecionados.elementos.length; i++){
						var elemento = selecionados.elementos[i];
						elemento.classList.replace("selecionada", "errado");
					}
					setTimeout(function(){
						for(var i = 0; i < selecionados.elementos.length; i++){
							var elemento = selecionados.elementos[i];
							if(elemento.dataset.encontrada == "true"){
								elemento.classList.replace("errado", "encontrada");
							}else{
								elemento.classList.remove("errado");
							}
						}
					}, 1000);
				}, 1000);
			}
		}
		function iniciaJogo(){
			cores = ["TRANSFUSAO", "MONITORAMENTO", "COLETA", "ESTOCAGEM", "ISOVOLEMIA", "ELEGIBILIDADE"];
			primeiroclique = false;
			encontradas = 0;
			data = {};
			document.getElementById("encontradas").innerText = "Encontradas: "+encontradas+"\n Restantes: "+ cores.length;
			for(var i = 0; i < t.rows.length; i++){
				t.rows[i].id = "linha " + i;
				t.rows[i].dataset.index = i;
				for(var j = 0; j < t.rows[i].cells.length; j++){
					t.rows[i].cells[j].classList = [];
					t.rows[i].cells[j].dataset.encontrada = "false";
					t.rows[i].cells[j].id = "coluna " + j;
					t.rows[i].cells[j].dataset.index = j;
					t.rows[i].cells[j].addEventListener("click", clique);
				}
			}
			document.getElementById("iniciar").hidden = true;
			document.getElementById("parabens").hidden = true;
			document.getElementById("jogo").hidden = false;
			document.getElementById("btnVoltar").hidden = true;
		}
		var btnPlay = document.getElementById("btnPlay");
		btnPlay.onclick = function(){
			iniciaJogo();
		}
		var btnVoltar = document.getElementById("btnVoltar");
		btnVoltar.onclick = function(){
			btnVoltar.hidden = true;
			document.getElementById("iniciar").hidden = false;
			document.getElementById("parabens").hidden = true;
			document.getElementById("jogo").hidden = true;
		}