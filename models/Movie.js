const { DataTypes} = require ('sequelize')

module.exports=(sequelize) =>{

    sequelize.define(
        'Movie',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
              
            },
            image:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            title:{
                type: DataTypes.STRING,
                allowNull: false
            },
            date:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            rating:{
                type: DataTypes.INTEGER,
                allowNull: false
            }




        }
    )
}