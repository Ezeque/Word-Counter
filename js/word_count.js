$(document).ready(()=>{
	let texto;
	let counter = 0
	let palavras = 0
	let letras= 0
	let paragrafos = 0

	$("#word-num").html(palavras)
	$("#letter-num").html(letras)
	$("#paragraph-num").html(paragrafos)

	$("textarea").keydown(()=>{
		texto = $("textarea").val()
		palavras = texto.split(" ").length

		letras = texto.split("").length + 1

		paragrafos = texto.split("\n").length


		if (texto == '') {
			palavras = 0
			letras = 0
			paragrafos = 0
		}

		$("#word-num").html(palavras)
		$("#letter-num").html(letras)
		$("#paragraph-num").html(paragrafos)
	})
})