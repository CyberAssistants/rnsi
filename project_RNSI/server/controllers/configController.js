const fs = require('fs/promises');
const ApiError = require('../error/ApiError');

class ConfigController {
    async create(req, res, next) {
        try {
            let {weekdey, start_time, end_time, url, token} = req.body
            let IS_INTEGRATION = "IS_INTEGRATION=" + req.body.is_integ;
            let WEEKDEY = "WEEKDEY=" + weekdey;
            let START_TIME = "START_TIME=" + start_time;
            let END_TIME = "END_TIME=" + end_time;
            let URL_REST_API_FNSI = "URL_REST_API_FNSI=" + url;
            let TOKEN = "TOKEN=" + token;
            let configFile = IS_INTEGRATION + '\n' + WEEKDEY + '\n' + START_TIME + '\n' +
            END_TIME + '\n' + URL_REST_API_FNSI + '\n' + TOKEN;
            await fs.writeFile('./setting/.env', configFile);
            return res.json(req.body)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ConfigController()