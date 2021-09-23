const { DataTypes } = require ("sequelize");

module.exports=(sequelize) =>{

    sequelize.define(
        'Character',
        {
            id: {
                type: DataTypes.UUID,
                
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
              
              },
            name: { 
                type: DataTypes.STRING,

            },
            image:{
                type: DataTypes.STRING,
                
            },
            age:{
                type: DataTypes.INTEGER,
               
            },
            weight:{
                type: DataTypes.INTEGER,
               
            },
            history:{
                type: DataTypes.STRING,
                
            }
        }
    )
}