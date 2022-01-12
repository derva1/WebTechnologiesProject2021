const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const path = require('path');
const url = require('url');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.use('/', express.static(path.join(__dirname, '/public/html')));
app.use('/', express.static(path.join(__dirname, '/public/css')));
app.use('/', express.static(path.join(__dirname, '/public/js')));
app.use('/', express.static(path.join(__dirname, '/public/images')));
app.use('/', express.static(path.join(__dirname, '/public')));


app.get('/vjezbe/', (req, res) => {
		var data = fs.readFileSync('vjezbe.csv','utf8');
        let spisakVjezbi = data.toString().split(" ");
            let objekat = {
                brojVjezbi:spisakVjezbi[0],
                brojZadataka:[]
            };
        let zadaci = spisakVjezbi[1].split(",");
            for(let i = 0; i<zadaci.length; ++i){
            	objekat.brojZadataka[i]=parseInt(zadaci[i]);
            }
        res.status(200).json(objekat);
});

app.post('/vjezbe/', function (req, res) {
    let tijelo = req.body;
    let niz = req.body.brojZadataka;
    //Prekontrolisati je li sve ok u tijelu
    let objekat = {
    		status:"error",
    		data:""
    	}
    if(tijelo['brojVjezbi']<=0 || tijelo['brojVjezbi']>15) {
    	objekat.status="error";
    	objekat.data="Pogrešan parametar brojVjezbi";
    }	
    for(let i = 0 ; i < niz.length; i++){
    	if(niz[i] < 0 || niz[i]>10){
    		if(objekat.data.length == 0) objekat.data = "Pogrešan parametar z"+i;
    		else objekat.data = objekat.data + ", z" + i+1;
    	}
    }
    if(objekat.data.length>0) res.status(200).json(objekat);
    else{
    let novaLinija =  + tijelo['brojVjezbi'] + ", " + tijelo['brojZadataka'];
	fs.writeFileSync('vjezbe.csv',novaLinija,'utf8');
	res.status(200).json(tijelo);
	}
});

app.listen(3000);