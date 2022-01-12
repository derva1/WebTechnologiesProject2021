function onClickAction() {
	VjezbeAjax.dodajInputPolja(document.getElementById("id1"),document.getElementById("unos").value);

}

function slanjePodatakaAction(){
	let povratni = {
		brojVjezbi: parseInt(document.getElementById("unos").value),
		brojZadataka:[]
	};

	
	for(let i = 0; i<povratni.brojVjezbi; i++){
		povratni.brojZadataka[i] = parseInt(document.getElementById("z"+i).value);
	}

	VjezbeAjax.posaljiPodatke(povratni,(err,data) => {
		if(err) console.log("Podaci nisu uspješno poslani");
		else console.log("Uspješno poslani podaci");
	});

}