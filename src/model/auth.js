const { DataTypes, Model } = require('sequelize')
class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { sequelize, modelName: 'user' },
)
module.exports = new User()
