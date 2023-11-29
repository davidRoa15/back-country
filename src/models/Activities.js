const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Activities', {
    ID:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    duration:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    season:{
        type: DataTypes.ENUM("Summer","Autumn","Winter","Spring"),
        allowNull: false,
    }

    
    }, { timestamps: false });
};