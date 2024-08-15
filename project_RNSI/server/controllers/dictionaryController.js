const {Dictionary} = require('../models/models')
const ApiError = require('../error/ApiError')
const https = require('https')
require('dotenv').config({ path: "./setting/.env"})

class DictionaryController {
    async getAll(req, res) {
        let token = req.query.userKey
        https.get(process.env.URL_REST_API_FNSI + '/searchDictionary?userKey=' + token, response =>{
            let todo = ''
            response.on('data', chunk => {
                todo += chunk
            })
            response.on('end', () => {
                console.log(JSON.parse(todo).title)
                return res.json(todo)
            })
        })
        .on('error', error => {
            console.log('Error: ' + error.message)
        })
    }

}

module.exports = new DictionaryController()