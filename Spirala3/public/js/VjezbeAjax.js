var VjezbeAjax =(function(){
	var dodajInputPolja= function(DOMelementDIVauFormi,brojVjezbi){

		while (DOMelementDIVauFormi.hasChildNodes()) {
                DOMelementDIVauFormi.removeChild(DOMelementDIVauFormi.lastChild);
            }
		for(let i = 0; i < brojVjezbi; i++){
			DOMelementDIVauFormi.appendChild(document.createTextNode("Vježba " + (i+1) + ": "));
			 var input = document.createElement("input");
                input.type = "text";
                input.id="z"+i;
                input.name = "z" + i;
                input.value=4;
                DOMelementDIVauFormi.appendChild(input);
                DOMelementDIVauFormi.appendChild(document.createElement("br"));
		}

	}

	var posaljiPodatke = function(vjezbeObjekat,callbackFja){
		var xhttp = new XMLHttpRequest();
      
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
        	callbackFja(null,xhttp.responseText);
        }
        else {
        	callbackFja(xhttp.statusText,null);
        }}

        xhttp.open("POST","http://localhost:3000/vjezbe",true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(vjezbeObjekat));		
	

	}

    var dohvatiPodatke = function(callbackFja) {
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200)
                callbackFja(null,ajax.responseText);
            else
                callbackFja(ajax.statusText,null);
        }

        ajax.open("GET","http://localhost:3000/vjezbe",true); //dohvacanje podataka
        ajax.send();
    }

    var iscrtajVjezbe = function(divDOMelement, vjezbeObjekat){
    	let i = 1; 

    	do{

    		let dugme = document.createElement("button");
    		dugme.innerHTML = "Vježba"+i;
    		dugme.setAttribute("value",vjezbeObjekat.brojZadataka[i-1]);
    		dugme.setAttribute("class", "vjezbaDugme" );
    		
    		dugme.onclick = function() {
    		    iscrtajZadatke(dugme,dugme.value);
            }
            divDOMelement.appendChild(dugme);


            let div = document.createElement("div");
        	div.setAttribute("class","odabirZadatka");
            div.style.visibilitiy = "hidden";

            divDOMelement.appendChild(div);
            i++;
        } while (i <= parseInt(vjezbeObjekat.brojVjezbi));
    }


	var iscrtajZadatke = function(vjezbaDOMelement,brojZadataka) {
		let roditeljDiv = vjezbaDOMelement.parentNode;

	    let vecOtvoreni = 0;
	    let i = 1;
	    while(i<=roditeljDiv.childElementCount) {
	        if(i%2==0){
		        if (roditeljDiv.childNodes[i].style.display == "inline-block") {
		            vecOtvoreni = i;
		            roditeljDiv.childNodes[i].style.display = "none"; //Zatvori otvorenu vjezbu i zapamti koja je
		        }
	        }
	    i++;
	    }
	    i=1;
	    while(i<=roditeljDiv.childElementCount) {
	    if(i%2==1){
	        if (roditeljDiv.childNodes[i].isSameNode(vjezbaDOMelement)) {
	            if (roditeljDiv.childNodes[i+1].childElementCount == 0) {
	                for (let j = 1; j <= brojZadataka; j++) {
	                    let dugme = document.createElement("button");
	                    dugme.setAttribute("class", "zadatakDugme");
	                    dugme.textContent = "Zadatak " + j;
	                    roditeljDiv.childNodes[i+1].appendChild(dugme);
	                    }
	                }
	               
	                roditeljDiv.childNodes[i+1].style.display = "inline-block"; //otvori zadatke za vjezbu
	                if(vecOtvoreni==i+1) roditeljDiv.childNodes[i+1].style.display = "none"; // zatvori ako je ista vjezba
	            }
	        }
	        i++;
	    }
    }



return {dodajInputPolja:dodajInputPolja,
		posaljiPodatke:posaljiPodatke,
		dohvatiPodatke:dohvatiPodatke,
		iscrtajVjezbe:iscrtajVjezbe,
		iscrtajZadatke:iscrtajZadatke
	}
}());