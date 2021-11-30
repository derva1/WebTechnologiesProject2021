let assert = chai.assert;
describe ('Testovi Parser', function() {
  describe ('dajTacnost - testiranje;', function() {
    it('Test 1 - svi testovi uspjesni', function() {
      const test1 =  `
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
          "failures": [],
          "passes": [
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
          ]
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.dajTacnost(test1)),'{"tacnost":"100%","greske":[]}');
    });

    it('Test 2 - Jedan prolazi, jedan pada', function() {
      const test2 =  `
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
            "fullTitle": "Prvi test koji bi trebao biti tačan",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
          ]
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.dajTacnost(test2)),'{"tacnost":"50%","greske":["Drugi test koji ne bi trebao biti tačan"]}');
    });
    it('Test 3 - Svi neuspješni', function() {
      const test3 =  `
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
        assert.deepEqual(JSON.stringify(TestoviParser.dajTacnost(test3)),'{"tacnost":"0%","greske":["Prvi test koji ne bi trebao biti tačan","Drugi test koji ne bi trebao biti tačan"]}');
    });
    it('Test 4 - Testovi se ne mogu izvršiti', function() {
      const test4 =  `
        {
          "stats": {
          "suites": 2,
          "tests": 2,
          "passes": 0,
          "pending": 2,
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
        
        assert.deepEqual(JSON.stringify(TestoviParser.dajTacnost(test4)),'{"tacnost":"0%","greske":["Testovi se ne mogu izvršiti"]}');
    });
        it('Test 5 - Testovi se ne mogu izvršiti - Neispravan JSON', function() {
      const test5 =  `
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
          }
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
          }],
          "passes": []
        }`;
        assert.deepEqual(JSON.stringify(TestoviParser.dajTacnost(test5)),'{"tacnost":"0%","greske":["Testovi se ne mogu izvršiti"]}');
    });
 }); 

  });