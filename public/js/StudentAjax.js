var StudentAjax =(function(){

var dodajStudenta = function(student,fnCallback){
	let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200)
                fnCallback(null, JSON.parse(ajax.responseText));
            else{
            	fnCallback(ajax.status);
            }
        }

        ajax.open("POST","http://localhost:3000/student",true); //dohvacanje podataka
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(student));     
}



var postaviGrupu = function(index,grupa,fnCallback){

	let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200)
                fnCallback(null,JSON.parse(ajax.responseText));
        }

        ajax.open("PUT","http://localhost:3000/student/"+index,true); //dohvacanje podataka
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify({"grupa" : grupa}));     
};


var dodajBatch = function(csvStudenti, fnCallback){
	let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200)
                fnCallback(null,JSON.parse(ajax.responseText));
        }

        ajax.open("POST","http://localhost:3000/batch/student",true); //dohvacanje podataka
        ajax.setRequestHeader("Content-Type", "text/plain");
        ajax.send(JSON.stringify(csvStudenti));     
}

return {
	dodajStudenta: dodajStudenta,
	postaviGrupu: postaviGrupu,
	dodajBatch: dodajBatch
}
}());