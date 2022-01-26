const app = require("./index");
const db = require("./models/wt2118726")
const { assert } = require('chai');
let chai = require('chai');
let chaiHttp = require("chai-http");
const { expect } = chai;

chai.assert;

chai.use(chaiHttp);

describe("Testovi za sve rute", () => {
    before((done) => {
        db.sequelize.sync({
            force: true
        }).then(() => {
            console.log("Gotovo kreiranje tabela i ubacivanje pocetnih podataka!");
            done();
        });
    })
    after((done) => {
        db.sequelize.sync({
            force: true
        }).then(() => {
            console.log("Gotovo kreiranje tabela i ubacivanje pocetnih podataka!");
            done();
        });
    })

    it("Ispravno dodavanje studenta", (done) => {
        
        const objekt = {
            ime: "Vedad",
            prezime: "Dervisevic",
            index: "18726",
            grupa: "Grupa1"
        }
        chai
            .request("http://localhost:3000").post("/student").send(objekt).end((err,d) => {
                expect(d.body.status).to.equals("Kreiran student!");
                done();
            })
        
    })
    it("Neispravno dodavanje studenta", (done) => {
        const objekt = {
            ime: "Vedo",
            prezime: "Derva",
            index: "18726",
            grupa: "Grupa1"
        }
        chai
            .request("http://localhost:3000").post("/student").send(objekt).end((err,d) => {
                expect(d.body.status).to.equals("Student sa indexom " + objekt.index + " već postoji!")
                done();
            })

    })
    it("Ispravno dodavanje studenta 2", (done) => {
        const objekt = {
            ime: "Ispravan",
            prezime: "Student",
            index: "10000",
            grupa: "Grupa2"
        }
        chai
            .request("http://localhost:3000").post("/student").send(objekt).end((err,d) => {
                expect(d.body.status).to.equals("Kreiran student!");
                done();
            })
    })

    it("Broj studenata", (done) => {
        db.student.findAll().then((studenti) => {
            expect(studenti.length).to.equals(2);
            done();
        })
    })



    it("Provjera promjene grupe za prvog studenta", (done) => {
        const objekt = {
            grupa: "Grupa3"
        }
        chai
            .request("http://localhost:3000").put("/student/18726").send(objekt).end((err,d) => {
                expect(d.body.status).to.equals("Promijenjena grupa studentu 18726");
                done();
            })
    })

    it("Dodavanje novih studenata preko batch", (done) => {
        let tekst = "Ispravan,Student11,1,Grupa1\nIspravno,Student22,2,Grupa2"

        chai
            .request("http://localhost:3000").post("/batch/student").set("content-type","text/plain").send(tekst).end((err,d) => {
                expect(d.body.status).to.equals("Dodano 2 studenata!");
                done();
            })
    })

    
})
