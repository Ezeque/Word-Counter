$(document).ready(()=>{
	let c_text
	let aux
	let check_last = false
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
			})
			console.log($("textarea").val().split("")[$("textarea").val().split("").length - 1])
			$("textarea").val(v.trim($("textarea").val()))
			check_last = true
			aux = $("textarea").val()
		}

	})
})