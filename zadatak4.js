        let assert = chai.assert;
        describe ('porediRezultate - testiranje;', function() {
        it('Novi Test 1 - testiranje poredjenja oba testa ista, i oba testa su u drugom rezultatu prošla uspješno', function(){
            const test1=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 0,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": []
          
        }`;
          const test2= `
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 2,
          "pending": 0,
          "failures": 0,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          
          ],
          "passes": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },

          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.porediRezultate(test1,test2)),'{"promjena":"100%","greske":[]}')


     });
     it('Novi Test 2 - testiranje poredjenja oba testa istih naziva, ali u rezultatu dva oba testa su u failures', function(){   
       const test1=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 2,
          "pending": 0,
          "failures": 0,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [  
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "failures": [],
          "passes": []
          
        }`;

        const test2=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 0,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": []
          
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.porediRezultate(test1,test2)),'{"promjena":"0%","greske":["Drugi test koji ne bi trebao biti tačan","Prvi test koji ne bi trebao biti tačan"]}');
        });

     it('Novi Test 3 - testiranje poredjenja oba testa istih naziva, ali u rezultatu dva jedan test je u failures', function(){   
       const test1=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 2,
          "pending": 0,
          "failures": 0,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [  
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "failures": [],
          "passes": []
          
        }`;

        const test2=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 1,
          "pending": 0,
          "failures": 1,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": [
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.porediRezultate(test1,test2)),'{"promjena":"50%","greske":["Prvi test koji ne bi trebao biti tačan"]}');
        });

          it('Novi Test 4 - testiranje poredjenja, nazivi su različiti, u rezultatu1 nema padnutih testova, dok u razultatu2 ima jedan padnuti', function(){   
       const test1=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 2,
          "pending": 0,
          "failures": 0,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [],
          "passes": [
                    {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }]
          
        }`;

        const test2=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 1,
          "pending": 0,
          "failures": 1,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": [
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.porediRezultate(test1,test2)),'{"promjena":"50%","greske":["Prvi test koji bi trebao biti tačan"]}');
        });
        it('Novi Test 5 - testiranje poredjenja, nazivi su različiti, u rezultatu1 nema padnutih testova, dok u razultatu2 su svi pali', function(){   
       const test1=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 2,
          "pending": 0,
          "failures": 0,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [  
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "failures": [],
          "passes": []
          
        }`;

        const test2=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 0,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": []
          
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.porediRezultate(test1,test2)),'{"promjena":"100%","greske":["Drugi test koji bi trebao biti tačan","Prvi test koji bi trebao biti tačan"]}');
        });

         it('Novi Test 6 - testiranje poredjenja, nazivi su različiti, u rezultatu1 ima padnutih testova kojih nema u rezultatu2, dok u razultatu2 su svi pali', function(){   
       const test1=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 1,
          "pending": 0,
          "failures": 1,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;

        const test2=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 1,
          "pending": 0,
          "failures": 1,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": []
          
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.porediRezultate(test1,test2)),'{"promjena":"66.7%","greske":["Drugi test koji ne bi trebao biti tačan","Drugi test koji bi trebao biti tačan","Prvi test koji bi trebao biti tačan"]}');
        });

        it('Novi Test 7 - testiranje poredjenja, nazivi su različiti, više je testova koji padaju u oba rezultata, testiranje leksikografskog poretka', function(){   
       const test1=`
        {
          "stats": {
          "suites": 2,
          "tests": 4,
          "passes": 2,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je treci test",
            "fullTitle": "Treci test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je cetvrti test",
            "fullTitle": "Cetvrti test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je cetvrti test",
            "fullTitle": "Cetvrti test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je treci test",
            "fullTitle": "Treci test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;

        const test2=`
        {
          "stats": {
          "suites": 2,
          "tests": 3,
          "passes": 1,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan(razlikovanje teksta)",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je sesti test",
            "fullTitle": "Sesti test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan(razlikovanje teksta)",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je sesti test",
            "fullTitle": "Sesti test koji bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": [{
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.porediRezultate(test1,test2)),'{"promjena":"80%","greske":["Cetvrti test koji ne bi trebao biti tačan","Drugi test koji ne bi trebao biti tačan","Prvi test koji ne bi trebao biti tačan(razlikovanje teksta)","Sesti test koji bi trebao biti tačan"]}');
        }); 

        it('Novi Test 8 - testiranje poredjenja, nazivi su različiti, više je testova koji padaju u oba rezultata, prisustvo istih padnutih testova, testiranje računanja x-a, testiranje leksikografskog poretka', function(){   
       const test1=`
        {
          "stats": {
          "suites": 2,
          "tests": 4,
          "passes": 2,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je treci test",
            "fullTitle": "Treci test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je cetvrti test",
            "fullTitle": "Cetvrti test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je cetvrti test",
            "fullTitle": "Cetvrti test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je treci test",
            "fullTitle": "Treci test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;

        const test2=`
        {
          "stats": {
          "suites": 2,
          "tests": 3,
          "passes": 1,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan(razlikovanje teksta)",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je sesti test",
            "fullTitle": "Sesti test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je sesti test",
            "fullTitle": "Sesti test koji bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": [{
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan(razlikovanje teksta)",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.porediRezultate(test1,test2)),'{"promjena":"75%","greske":["Cetvrti test koji ne bi trebao biti tačan","Drugi test koji ne bi trebao biti tačan","Sesti test koji bi trebao biti tačan"]}');
        }); 
 

         it('Novi Test 9 - testiranje poredjenja, identična dva testa', function(){   
       const test1=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 1,
          "pending": 0,
          "failures": 1,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;

        const test2=`
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 1,
          "pending": 0,
          "failures": 1,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
          },
          "tests": [
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "pending": [],
          "failures": [

           {
            "title": "Ovo je drugi test",
            "fullTitle": "Drugi test koji ne bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ],
          "passes": [          
          {
            "title": "Ovo je prvi test",
            "fullTitle": "Prvi test koji  bi trebao biti tačan",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
          
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.porediRezultate(test1,test2)),'{"promjena":"50%","greske":["Drugi test koji ne bi trebao biti tačan"]}');
        });
}); 