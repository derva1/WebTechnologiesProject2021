let assert = chai.assert;
let should = chai.should();

describe('Testovi', function() {
    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();

        this.requests = [];
        this.xhr.onCreate = function(xhr) {
            this.requests.push(xhr);
        }.bind(this);
    });

    afterEach(function() {
        this.xhr.restore();
    });

    describe ('VjezbeAjax dohvatiPodatke funkcija testovi', function() {
        it ('Ispravan rad dohvatiPodatke', function() {
             var podaci = {brojVjezbi:5, brojZadataka:[1,2,3,4,5]};
             VjezbeAjax.dohvatiPodatke((err,data) => {
                assert.equal(err, null, "Ne bi trebala biti greska");
                assert.deepEqual(JSON.parse(data),podaci, "Podaci nisu jednaki");
             });

        });
    });

   describe('VjezbeAjax posaljiPodatke funkcija testovi', function() {
    it ('Demonstracija ispravnog rada funkcije - bez errora', function() {
          var podaci = {brojVjezbi:5, brojZadataka:[1,2,3,4,5]};
          VjezbeAjax.posaljiPodatke(podaci, (err,data)=> {
            assert.deepEqual(JSON.parse(data), podaci, "Error se ne bi trebao pojaviti");
          });
    });



    it ('Demonstracija ispravnog rada funkcije - sa errorom - brojZadataka sadrži negativan broj', function() {
         var podaci = {brojVjezbi:5, brojZadataka:[1,2,4,4,-5]};
         VjezbeAjax.posaljiPodatke(podaci, (err, data) => {
            assert.equal(err, !null, "Greska");
            assert.equal(data,null, "Data nije null!");
         });
    });

        it ('Demonstracija ispravnog rada funkcije - sa errorom - brojZadataka sadrži broj veći od 10', function() {
         var podaci = {brojVjezbi:5, brojZadataka:[1,2,14,4,5]};
         VjezbeAjax.posaljiPodatke(podaci, (err, data) => {
            assert.equal(err, !null, "Greska");
            assert.equal(data,null, "Data nije null!");
         });
    });
});

    describe('VjezbeAjax dodajInputPolja funkcija testovi', function() {
       it('Provjera da li dodajInputPolja radi ispravno', function() {
                var divVjezbe = document.createElement("div");
                VjezbeAjax.dodajInputPolja(divVjezbe,4); 
                assert.equal(divVjezbe.childElementCount, 8, "Nije dovoljan broj input polja"); 
        });
   });



    describe('VjezbeAjax iscrtajVjezbe funkcija testovi', function() {
        it ('Provjera da li se iscrta dovoljan broj vjezbi i divova za zadatke', function() {
            var divVjezbe = document.createElement("div");
            var podaci = {brojVjezbi:4, brojZadataka:[1,1,1,1]};
            VjezbeAjax.iscrtajVjezbe(divVjezbe, podaci);
            assert.equal(divVjezbe.childElementCount, 8, "Dugmad nisu dobro postavljena!");
        });
        it ('Provjera da li je div prazan kada nije jednak brojVjezbi i duzina brojZadataka', function()  {
             var divVjezbe = document.createElement("div");
            var podaci = {brojVjezbi:3, brojZadataka:[1,1,1,1]};
            VjezbeAjax.iscrtajVjezbe(divVjezbe, podaci);
            assert.equal(divVjezbe.childElementCount, 0, "Parametri su pogrešni");
        });

        it ('Provjera da li je div prazan kada je brojVjezbi preko 15', function()  {
             var divVjezbe = document.createElement("div");
            var podaci = {brojVjezbi:16, brojZadataka:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};
            VjezbeAjax.iscrtajVjezbe(divVjezbe, podaci);
            assert.equal(divVjezbe.childElementCount, 0, "Parametri su pogrešni");
        });

        it ('Provjera da li je div prazan kada je brojZadataka preko 10', function()  {
             var divVjezbe = document.createElement("div");
            var podaci = {brojVjezbi:2, brojZadataka:[1,12]};
            VjezbeAjax.iscrtajVjezbe(divVjezbe, podaci);
            assert.equal(divVjezbe.childElementCount, 0, "Parametri su pogrešni");
        });
    });

    describe('VjezbeAjax iscrtajVjezbe testovi', function() {



    });




   });