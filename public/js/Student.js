const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
	const Student = sequelize.define("student",{
		ime:Sequelize.STRING,
		prezime:Sequelize.STRING,
		brojIndexa:Sequelize.STRING,
		grupa:Sequelize.STRING
	});
	return Student;
};