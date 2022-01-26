const Sequelize = require('sequelize');

module.exports = function(sequelize,DataTypes){
	const Vjezba = sequelize.define("vjezba",{
		nazivVjezbe:Sequelize.STRING,
		brojZadataka:Sequelize.INTEGER,
		id:{
			type:Sequelize.INTEGER,
			allowNull:false,
			primaryKey:true
		}
	});
	return Vjezba;
};