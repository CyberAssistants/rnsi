const Router = require('express')
const router = new Router()
const dictionaryController = require('../controllers/dictionaryController')

router.get('/', dictionaryController.getAll)

module.exports = router