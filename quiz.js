var form = document.querySelector("#formulario-quiz");

var botao = document.querySelector("#botao");

botao.addEventListener("click",function(event){
	event.preventDefault();
	
	var resposta = corrigir();

	var span = document.querySelector("#resposta");
	span.textContent ="você acertou " + resposta + " de  3 questões";
		
});	

function  corrigir(){
	
	var certo = 0
	var errado =0
	var html = form.html.value;
	var css = form.css.value;
	var js = form.js.value;

	if(html == "certo"){
		certo = certo + 1;
	}else{
		errado = errado + 1;
	}
	if(css == "certo"){
		certo = certo + 1;
	}else{
		errado = errado + 1;
	}
	if(js == "certo"){
		certo = certo + 1;
	}else{
		errado = errado + 1;
	}
	return certo;
}


