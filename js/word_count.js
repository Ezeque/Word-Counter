$(document).ready(()=>{
	let texto;
	let counter = 0
	let palavras = 0
	let letras= 0
	let paragrafos = 0
	let spacenum = 0

	$("#word-num").html(palavras)
	$("#letter-num").html(letras)
	$("#paragraph-num").html(paragrafos)

	$("textarea").keyup(()=>{
		texto = $("textarea").val()
		if (texto == "") {
			palavras = 0
			letras = 0
			paragrafos = 0
		}
		else{
			/* LÓGICA CONTAGEM DE LETRAS */
			if(texto.split("")[texto.split("").length - 1] != " "){
				letras = 0
				texto.split("").map((e)=>{
					if (e != " ") {
						letras ++
					}
				})
			}
			/* FIM LÓGICA CONTAGEM DE LETRAS */
		}

		$("#word-num").html(palavras)
		$("#letter-num").html(letras)
		$("#paragraph-num").html(paragrafos)
	})
})