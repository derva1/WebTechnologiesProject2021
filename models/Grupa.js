const Sequelize = require('sequelize');

module.exports = function(sequelize,DataTypes){
	const Grupa = sequelize.define("grupa",{
		imeGrupe:Sequelize.STRING
		
	});
	return Grupa;
};