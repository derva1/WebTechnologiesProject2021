


function posaljiBatchFunkcija(){

    var povratni = document.getElementById("unosIme").value+","+document.getElementById("unosPrezime").value+","+document.getElementById("unosIndex").value.toString()+","+document.getElementById("unosGrupa").value.toString();
	StudentAjax.dodajBatch(povratni,(err,data) => {
		if(err){
			console.log("Podaci nisu uspješno poslani");
			document.getElementById("ajaxstatus").innerHTML = JSON.stringify(data);
		} 
		else{
			console.log("Uspješno poslani podaci");
			document.getElementById("ajaxstatus").innerHTML = JSON.stringify(data);
		}
	})
}
