const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const path = require('path');
const url = require('url');
const sequelize = require('sequelize');
const db = require('./models/wt2118726.js');

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.use('/', express.static(path.join(__dirname, '/public/html')));
app.use('/', express.static(path.join(__dirname, '/public/css')));
app.use('/', express.static(path.join(__dirname, '/public/js')));
app.use('/', express.static(path.join(__dirname, '/public/images')));
app.use('/', express.static(path.join(__dirname, '/public')));


app.get('/vjezbe/', (req, res) => {
    let objekat = {
        brojVjezbica: 0,
        brojZadataka: []
    };
    db.vjezba.findAll({where:{}}).then(function(povratneVjezbe){
        let brojVjezbi1 = povratneVjezbe.length;
        objekat.brojVjezbica = parseInt(brojVjezbi1);
        for(let i = 0 ; i< brojVjezbi1;i++){
            objekat.brojZadataka[i] = 0;
        }
        for(let i = 0 ; i< brojVjezbi1; i++){
            console.log(objekat.brojZadataka[i]);
        }
        for(let i = 0; i < brojVjezbi1;i++){
                objekat.brojZadataka[i]=parseInt(povratneVjezbe[i].brojZadataka);
            
        }
           res.status(200).json(objekat);
    });
     
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
        db.zadatak.destroy({cascade:true,where:{}}).then(function(){
            db.vjezba.destroy({cascade:true,where:{}}).then(function(){
                let vjezbePromise = [];
                for(let i = 0 ; i < tijelo.brojVjezbi ; i ++){
                    let zadaciPromise = [];
                    for ( let j = 0 ; j < niz[i] ; j++){
                        zadaciPromise.push(db.zadatak.create({nazivZadatka: "Zadatak "+(j+1)}));
                    }
                    Promise.all(zadaciPromise).then(function(kreiraniZadaci){
                        vjezbePromise.push(db.vjezba.create({id:i+1, nazivVjezbe: "Vjezba "+(i+1), brojZadataka:niz[i]}).then(function(b){
                            return b.setVjezbaId(kreiraniZadaci).then(function(){
                                return new Promise ((resolve,reject) =>{
                                    resolve(b);
                                })
                            })
                        }))
                    })
                }
            });
        });
	}

});


    app.post('/student',function (req,res){
        let imeStudenta = req.body.ime;
        let prezimeStudenta = req.body.prezime;
        let indexStudenta = req.body.index.toString();
        let grupaStudenta = req.body.grupa;
        db.student.findOrCreate( {where:{brojIndexa: indexStudenta},defaults:{ime:imeStudenta,prezime:prezimeStudenta,grupa:grupaStudenta}}).then
        (([user, created])=> {
        if(created==false){
                let objekat = {
                status: "Student sa indexom "+indexStudenta+" već postoji!"
            };
             res.status(200).json(objekat);
        }
        else{
            db.grupa.findOne({where:{imeGrupe:grupaStudenta}}).then(function(grupa){
                if(grupa!=null){
                    db.student.findAll({where : {grupa:grupaStudenta}}).then(function(student){
                            grupa.setGrupaId(student)
                        })
                }
                else{
                    db.grupa.create({
                        imeGrupe:grupaStudenta
                    }).then(function(grupa){
                        db.student.findAll({where : {grupa:grupaStudenta}}).then(function(student){
                            grupa.setGrupaId(student)
                        })
                    })
                }
            })
            let objekat = {
                status: "Student je kreiran!"
            };
             res.status(200).json(objekat);
        }

        });
    });

    app.put('/student/:index',function(req,res){
        let brIndexa = req.params.index;
        let grupa1 = req.body.grupa;
        console.log(brIndexa)
        db.student.findOne({where:{brojIndexa:brIndexa}}).then(function(student){
            if(student == null){
                let objekat = {
                    status : "Student sa indexom " + brIndexa + " ne postoji" 
                };
                res.status(400).json(objekat);
            }
            else{
                db.grupa.findOrCreate({where:{imeGrupe:grupa1}}).then(([povratnaGrupa,created])=>{
                    db.student.update(
                        {grupa:grupa1},
                        {where:{brojIndexa:brIndexa}}).then(function(){
                        db.student.findAll({where : {grupa:grupa1}}).then(function(student){
                            povratnaGrupa.setGrupaId(student)
                        })
                })
                    })
                let objekat = {
                    status : "Promijenjena grupa studentu "+brIndexa 
                };
                res.status(200).json(objekat);
            }
        })

    });

    app.post('/batch/student',function(req,res){
        let sviStudenti = req.body.split('\r\n');
        let indexiPostojecihStudenata = [];
        let objekat = {
            status: ""
        };
        let indexiNovihStudenata = [];
        let brojacVecDodanih = 0;
        let brojacNovihStudenata = 0;
        let pomocnibrojac = 0; 
        let brojStudenataKojiSeObacuju = 0;
        let i = 0;
        var pomocniStudenti = [];
        for (let i = 0; i < sviStudenti.length;i++){
            var pomocniElement = sviStudenti[i].split(','); //Uzimanje svih indexa da bi kasnije mogli vratiti istim redoslijedom kako je i poslano
            pomocniStudenti[i] = pomocniElement[2];
        }
        var nizPom = []
        for(let i = 0; i <sviStudenti.length; i++){
            nizPom[i]=sviStudenti[i].split(',')
        }
        var k = 0;
        for(let i = 0; i< nizPom.length;i++){
            for(let j = i+1; j<nizPom.length;j++){
                if(sviStudenti.length>1 && nizPom[i][2]==nizPom[j][2]){
                    sviStudenti.splice((j-k),1); //Izbacivanje duplo,ostavljanje samo prvog
                    k++;
                }   
            }
        }

        sviStudenti.map((student1) => {
            i++;
            let pojedinacniElementi = student1.split(',')
        db.student.findAll({where:{}}).then(function(studenti){
    
                db.student.findOrCreate({where:{brojIndexa:pojedinacniElementi[2]},defaults:{ime:pojedinacniElementi[0],prezime:pojedinacniElementi[1],grupa:pojedinacniElementi[3]}}).then(function([student,kreiran]){

                if(kreiran==false){
                    brojacVecDodanih=brojacVecDodanih+1;
                    indexiPostojecihStudenata.push(pojedinacniElementi[2]);
                    pomocnibrojac = pomocnibrojac+1;
                }
                else{
                    brojacNovihStudenata = brojacNovihStudenata + 1;
                    indexiNovihStudenata.push(pojedinacniElementi[2]);
                    pomocnibrojac = pomocnibrojac + 1;

                }
                if(brojacVecDodanih==0 && brojacNovihStudenata!=0){
                    objekat.status = "Dodano " +brojacNovihStudenata+" studenata!";
                    if(brojacVecDodanih + brojacNovihStudenata == sviStudenti.length) res.status(200).json(objekat);
                }
                else if ( brojacVecDodanih!=0){

                    var filtriraniNiz = pomocniStudenti.filter(function(value,index,arr){
                        return indexiPostojecihStudenata.includes(value);
                    });
                    objekat.status = "Dodano "+brojacNovihStudenata+ " studenata, a studenti " + filtriraniNiz + " već postoje!";
                    if(brojacVecDodanih + brojacNovihStudenata == sviStudenti.length) res.status(200).json(objekat);
                }
                db.grupa.findOrCreate({
                        where:{imeGrupe:pojedinacniElementi[3]}
                    }).then(([grupa,kreirana])=>{
                        db.student.findAll({where : {grupa:pojedinacniElementi[3]}}).then(function(student){
                            grupa.setGrupaId(student);
                        })
                })
                    

            })

   
        })

        })
            
             

    });


app.listen(3000);