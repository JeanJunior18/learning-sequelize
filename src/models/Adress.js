const { Model, DataTypes } = require('sequelize');

class Adress extends Model {
    static init(sequelize){
        super.init({
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            zipcode: DataTypes.STRING
        }, {sequelize})
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = Adress
