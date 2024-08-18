const https = require('https')
require('dotenv').config({ path: "./setting/.env"})

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

class HttpRequest {
    async getSearchDictionary(callback) {
        let apiURL = process.env.URL_REST_API_FNSI + '/searchDictionary?userKey=' + process.env.TOKEN;
        https.get(apiURL, response =>{
            let todo = ''
            response.on('data', chunk => {
                todo += chunk
            })
            response.on('end', () => {
                callback(todo)
            })
        })
        .on('error', error => {
            console.error(error)
        })
    }
    async getPassport(identifier, callback) {
        let apiURL = process.env.URL_REST_API_FNSI + '/passport?userKey=' + process.env.TOKEN +
        '&identifier=' + identifier;
        https.get(apiURL, response =>{
            let todo = ''
            response.on('data', chunk => {
                todo += chunk
            })
            response.on('end', () => {
                callback(todo)
            })
        })
        .on('error', error => {
            console.error(error)
        })
    }

    async getData(identifier, callback) {
        let apiURL = process.env.URL_REST_API_FNSI + '/data?userKey=' + process.env.TOKEN +
        '&identifier=' + identifier;
        https.get(apiURL, response =>{
            let todo = ''
            response.on('data', chunk => {
                todo += chunk
            })
            response.on('end', () => {
                callback(todo)
            })
        })
        .on('error', error => {
            console.error(error)
        })
    }
}

module.exports = new HttpRequest()