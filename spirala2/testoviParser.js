var TestoviParser =(function(){
	var dajTacnost = function(nekiString){
		try{
		var nekiObjekat = JSON.parse(nekiString)
		} catch(err){
			var objekat = {
				"tacnost": 0+"%",
				"greske": []
			}
			let tekstoviGresaka=[]
			tekstoviGresaka[0] = "Testovi se ne mogu izvršiti"
			objekat["greske"]=tekstoviGresaka
			return objekat
		}
		if(nekiObjekat.pending.length!=0){
			var objekat = {
				"tacnost": 0+"%",
				"greske": []
			}
			let tekstoviGresaka=[]
			tekstoviGresaka[0] = "Testovi se ne mogu izvršiti"
			objekat["greske"]=tekstoviGresaka
			return objekat
		}
		var objekat = {
			"tacnost": nekiObjekat.stats.passes/nekiObjekat.stats.tests*100 + "%"
		}
		let tekstoviGresaka=[]
		for (let i = 0; i < nekiObjekat.failures.length; i++){
			tekstoviGresaka[i]=nekiObjekat.failures[i].fullTitle
		}
		objekat["greske"]=tekstoviGresaka
		return objekat
	}
	var porediRezultate = function(rezultat1, rezultat2){
		var objekat1 = JSON.parse(rezultat1)
		var objekat2 = JSON.parse(rezultat2)
		var brojRazlicitihTestova = 0
		var istiNaziv = 0
		var alert = 0
		var padnuti = []
		for(let i = 0; i<objekat1.tests.length; i++){
			var poredbeniString = objekat1.tests[i].fullTitle
			for ( let j = 0; j<objekat2.tests.length; j++){
				if(poredbeniString==objekat2.tests[j].fullTitle){
					istiNaziv = 1
				}
			}
			if(istiNaziv==0){
				for (let z = 0; z<objekat1.failures.length; z++){
					if(poredbeniString==objekat1.failures[z].fullTitle && !objekat2.failures.includes(objekat1.failures[z])){
						padnuti.push(objekat1.failures[z].fullTitle)
					}
				}
				alert = 1
			}
		}
		padnuti.sort()
		if(alert==0){
			
			var povratniObjekat = {
				"promjena": dajTacnost(rezultat2).tacnost
			}
			let tekstoviGresaka=[]
			for(let i = 0 ; i < objekat2.failures.length; i++){
				if(objekat1.failures.includes(objekat2.failures[i])==false){
					tekstoviGresaka.push(objekat2.failures[i].fullTitle)
				}
			}
			tekstoviGresaka.sort()
			povratniObjekat["greske"]=tekstoviGresaka
			return povratniObjekat
			}

		else if(alert==1){
			var padnutiIzDrugog = []
			for(let i = 0; i<padnuti.length; i++){
				if(objekat2.failures.includes(padnuti[i])==false){
					brojRazlicitihTestova = brojRazlicitihTestova+1
				}
			}
			var broj = (brojRazlicitihTestova+objekat2.stats.failures)/(brojRazlicitihTestova+objekat2.stats.tests) *100
			if(broj == Math.round(broj)){
				broj = broj;
			}
			else{
			broj = broj.toFixed(2)
			}
			var povratniObjekat = {
				"promjena": broj+ "%"
			}
			for(let i = 0; i < objekat2.failures.length; i++){
				if(padnuti.includes(objekat2.failures[i].fullTitle)==false){
					padnutiIzDrugog.push(objekat2.failures[i].fullTitle)
				}
			}
			padnutiIzDrugog.sort()
			for(let j = 0 ; j< padnutiIzDrugog.length; j++){
				padnuti.push(padnutiIzDrugog[j])
			}
			povratniObjekat["greske"]=padnuti
			return povratniObjekat
			}	
			}
	return {
		dajTacnost: dajTacnost,
		porediRezultate: porediRezultate
	}


}()); 