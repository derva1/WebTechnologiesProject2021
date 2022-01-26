function posaljiPutZahtjev(){

	index = document.getElementById("unosIndexa").value.toString();
	grupa = document.getElementById("unosGrupe").value;

	StudentAjax.postaviGrupu(index,grupa,(err,data) => {
		if(err){
			console.log("Podaci nisu uspješno poslani");
			document.getElementById("ajaxstatus").innerHTML = JSON.stringify(data);
		} 
		else{
			console.log("Uspješno poslani podaci");
			document.getElementById("ajaxstatus").innerHTML = JSON.stringify(data);
		}
	});
}