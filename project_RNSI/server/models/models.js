const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Dictionary = sequelize.define('dictionary', {
    result: {type: DataTypes.STRING},
    resultText: {type: DataTypes.STRING},
    resultCode: {type: DataTypes.STRING},
    identifier: {type: DataTypes.STRING},
    oid: {type: DataTypes.STRING, unique: true},
    version: {type: DataTypes.STRING},
    rowsCount: {type: DataTypes.INTEGER},
    createDate: {type: DataTypes.STRING},
    publishDate: {type: DataTypes.STRING},
    lastUpdate: {type: DataTypes.STRING},
    fullName: {type: DataTypes.STRING},
    shortName: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    structureNotes: {type: DataTypes.TEXT},
    releaseNotes: {type: DataTypes.STRING},
    laws: {type: DataTypes.ARRAY(DataTypes.JSON)},
    respOrganizationId: {type: DataTypes.INTEGER},
    authOrganizationId: {type: DataTypes.INTEGER},
    typeId: {type: DataTypes.INTEGER},
    groupId: {type: DataTypes.INTEGER},
    approveDate: {type: DataTypes.STRING},
    fields: {type: DataTypes.JSON},
    keys: {type: DataTypes.JSON},
    codes: {type: DataTypes.ARRAY(DataTypes.JSON)},
    hierarchical: {type: DataTypes.BOOLEAN},
    archive: {type: DataTypes.BOOLEAN},
    nsiDictionaryId: {type: DataTypes.INTEGER},
})

module.exports = {
    Dictionary
}