const {Dictionary} = require('../models/models')
const ApiError = require('../error/ApiError')
const httpRequest = require('../httpRequest/httpRequest')
const https = require('https')
require('dotenv').config({ path: "./setting/.env"})

const sequelize = require('../db')

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const postStructDictionary = async (data) => { //функция добавления паспорта справочника
    httpRequest.getPassport(data.oid, async (result) => {
        let dictionary = JSON.parse(result)
        await Dictionary.create(dictionary);
    })
}

const postDatDictionary = async (data) => { //функция создания справочников
    let dataList = {}
    for (let temp of data.fields){
        let name = temp.field
        if (temp.dataType == "DATETIME")
            dataList[name] = {type: "TIMESTAMP"}
        else if (temp.field == "id")
            dataList["id_fnsi"] = {type: temp.dataType}
        else if (temp.dataType == "INTEGER")
            dataList[name] = {type: "VARCHAR"}
        else
            dataList[name] = {type: temp.dataType}
    }

    let name = "oid" + data.oid.replace(/\./g, "_") + "_ver" + data.version.replace(/\./g, "_")
    let Dict = sequelize.define(name, dataList)
    await sequelize.sync()
    if (Dict.count() == 0){
    httpRequest.getData(data.oid, async (result) => {
        let dictionary = JSON.parse(result)
        for (let data of dictionary.list){
            let dataList = {}
            for (let d of data){
                if (d.column == 'id')
                    dataList['id_fnsi'] = d.value
                else
                    dataList[d.column] = d.value
            }
            await Dict.create(dataList);
        }
    })}
}
let flad = 0

class DictionaryController {
    
    async postAllDictionary(req, res) { //метод создания списка справочников
        httpRequest.getSearchDictionary(async (result) => {
            let flad = true
            let dictionary = JSON.parse(result)
            for (let data of dictionary.list){
                if (data.archive == false){
                    let oid = data.oid
                    let version = data.version
                    let lastUpdate = data.lastUpdate
                    const dictionaryRNSI = await Dictionary.findOne({ where: {'oid': oid, 'version': version, 'lastUpdate': lastUpdate}})
                    if (dictionaryRNSI == null){
                        await postStructDictionary(data);
                    }
                }
            }
            const dictionaryRNSI = await Dictionary.findAll()
            return res.json(dictionaryRNSI)
        })
    }

    async getAllDictionary(req, res) { //метод получения списка справочников
            const dictionaryRNSI = await Dictionary.findAll()
            return res.json(dictionaryRNSI)
    }

    async getDictionary(req, res) { //метод получения структуры справочника по oid
        //let oid = req.oid
        const dictionaryRNSI = await Dictionary.findOne({ where: {'oid': req.query.oid}})
        return res.json(dictionaryRNSI)
}

    async postDataDictionary(req, res) { //метод создания справочников
        httpRequest.getSearchDictionary(async (result) => {
            let dictionary = JSON.parse(result)
            for (let data of dictionary.list){
                if (data.archive == false){
                    let oid = data.oid
                    let version = data.version
                    let lastUpdate = data.lastUpdate
                    const dictionaryRNSI = await Dictionary.findOne({ where: {'oid': oid, 'version': version, 'lastUpdate': lastUpdate}})
                    if (dictionaryRNSI != null){
                            const data = await Dictionary.findOne({ where: {'oid': oid, 'version': version, 'lastUpdate': lastUpdate}})
                            await postDatDictionary(data.dataValues);
                        
                    }
                }
            }
            const dictionaryRNSI = await Dictionary.findAll()
            return res.json(dictionaryRNSI)
        })
    }

    async getDataDictionary(req, res) { //метод получения справочника по oid и version
       
        let oid = req.query.oid
        let version = req.query.version
        const dict = await Dictionary.findOne({ where: {'oid': oid, 'version': version}})
        if (dict != null){
            let name = "oid" + oid.replace(/\./g, "_") + "_ver" + version.replace(/\./g, "_")
            let dataList = {}
            for (let temp of dict.fields){
                let name = temp.field
                if (temp.dataType == "DATETIME")
                    dataList[name] = {type: "TIMESTAMP"}
                else if (temp.field == "id")
                    dataList["id_fnsi"] = {type: temp.dataType}
                else if (temp.dataType == "INTEGER")
                    dataList[name] = {type: "VARCHAR"}
                else
                    dataList[name] = {type: temp.dataType}
            }

            let Dict = sequelize.define(name, dataList)
            const dictionaryRNSI = await Dict.findAll()
            return res.json(dictionaryRNSI)  
        }
        return res.json({message: "Не найдено!"}) 
    }

    async deleteDictionary(req, res) {
        await sequelize.sync()
        await sequelize.drop()
        return res.json({message: "база очищена"})
    }

}

module.exports = new DictionaryController()    