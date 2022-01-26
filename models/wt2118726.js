const Sequelize = require("sequelize");
const sequelize = new Sequelize("wt2118726","root","password",{host:"127.0.0.1",dialect:"mysql",logging:true});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//import modela
db.vjezba = require('./Vjezba.js')(sequelize);
db.zadatak = require('./Zadatak.js')(sequelize);
db.student = require('./Student.js')(sequelize);
db.grupa = require('./Grupa.js')(sequelize);


//relacije
db.grupa.hasMany(db.student, {as:'GrupaId'});
db.vjezba.hasMany(db.zadatak, {as:'VjezbaId'});


module.exports=db;