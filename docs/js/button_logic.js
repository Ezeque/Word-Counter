$(document).ready(()=>{
	let c_text
	let aux
	let check_last = false

	/* LÓGICA CAPITALIZE */
	$("#capitalize").click(()=>{
		if($("textarea").val() != aux){
			$("textarea").val(v.trimRight($("textarea").val(), "."))
			console.log($("textarea").val())
			check_last = false
		}
		if(check_last == true){}
		else{
			aux = $("textarea").val().split(".")
			$("textarea").val("")
			aux.map((e)=>{
				e = v.trim(e)
				e = v.capitalize(e)
				$("textarea").val($("textarea").val() + e + ". ")
				if($("textarea").val()[$("textarea").val().indexOf(e) + 1] == "\n"){
					$("textarea").val($("textarea").val() + e + ". ")
				}
			})

			aux = $("textarea").val().split("\n")
			$("textarea").val("")
			aux.map((e)=>{
				e = v.trim(e)
				e = v.capitalize(e)
				$("textarea").val($("textarea").val() + e + "\n")
			})
			console.log($("textarea").val().split("")[$("textarea").val().split("").length - 1])
			$("textarea").val(v.trim($("textarea").val()))
			check_last = true
			aux = $("textarea").val()
		}

	})

	$("#copy").click(()=>{
		navigator.clipboard.writeText($("textarea").val());
		$("#copy").html("Copied!")
		setTimeout(()=>{$("#copy").html("Copy to clipboard")}, 1000)
	})
})