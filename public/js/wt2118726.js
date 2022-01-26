const Sequelize = require("sequelize");
const sequelize = new Sequelize("wt2118726","root","password",{host:"127.0.0.1",dialect:"mysql",logging:true});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//import modela
db.vjezba = require('.public/js/Vjezba.js')(sequelize);
db.zadatak = require('.public/js/Zadatak.js')(sequelize);
db.student = require('.public/js/Student.js')(sequelize);
db.grupa = require('.public/js/Grupa.js')(sequelize);


//relacije

module.exports=db;