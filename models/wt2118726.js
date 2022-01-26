const Sequelize = require('sequelize');
const sequelize = new Sequelize("wt2118726", "root", "password", {
    host: "127.0.0.1",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0
    }
});

const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

// Import modela
db.vjezba= require('./vjezba.js')(sequelize);
db.zadatak=require('./zadatak.js')(sequelize);
db.student=require('./student.js')(sequelize);
db.grupa=require('./grupa.js')(sequelize);

// Definisanje relacija
db.vjezba.hasMany(db.zadatak,{as: 'vjezbaId'});
db.grupa.hasMany(db.student,{as: 'grupaId'});

// Eksport
module.exports = db;