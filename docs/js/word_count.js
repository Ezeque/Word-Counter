$(document).ready(()=>{
	let texto;
	let counter = 0
	let palavras = 0
	let letras= 0
	let paragrafos = 0
	let spacenum = 0
	let c_text

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
			letras = 0
			texto.split("").map((e)=>{
				if (e != " " && e != "\n") {
					letras ++
				}
			})
			
			/* FIM LÓGICA CONTAGEM DE LETRAS */

			/* LÓGICA CONTAGEM DE PALAVRAS*/

			palavras = v.countWords($("textarea").val())
			
			/* FIM LÓGICA CONTAGEM DE PALAVRAS*/

			/* LÓGICA CONTAGEM DE PARÁGRAFOS*/
			paragrafos = 0
			texto.split("\n").map((e)=>{
				if(v.isBlank(e) == true){
					
				}
				else{
					paragrafos ++
				}
			})
			/* FIM LÓGICA CONTAGEM DE PARÁGRAFOS*/
		}

		$("#word-num").html(palavras)
		$("#letter-num").html(letras)
		$("#paragraph-num").html(paragrafos)

	})
})