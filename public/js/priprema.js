


const db = require('./wt2118726.js');
db.sequelize.sync({force:true}).then(function(){
        console.log("Gotovo kreiranje tabela i ubacivanje pocetnih podataka!");
    	process.exit();
});