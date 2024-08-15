const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Dictionary = sequelize.define('dictionary', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    data: {type: DataTypes.JSONB, unique: true,},
})

module.exports = {
    Dictionary
}