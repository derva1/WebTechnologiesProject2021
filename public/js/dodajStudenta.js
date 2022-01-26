function posaljiPostZahtjev(){
    var objekat = {
    	ime: document.getElementById("unosIme").value,
    	prezime: document.getElementById("unosPrezime").value,
    	index: document.getElementById("unosIndex").value.toString(),
    	grupa: document.getElementById("unosGrupa").value
    }
	StudentAjax.dodajStudenta(objekat,(err,data) => {
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