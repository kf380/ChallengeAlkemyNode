const { DataTypes} = require ('sequelize')

module.exports=(sequelize) =>{

    sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
              
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            email:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            username:{
                type: DataTypes.STRING,

            },
            password:{
                type: DataTypes.STRING,
            }




        }
    )
}