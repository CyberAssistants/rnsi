const Router = require('express')
const router = new Router()
const dictionaryController = require('../controllers/dictionaryController')

router.get('/', dictionaryController.getAllDictionary)
router.get('/data', dictionaryController.getDataDictionary)
router.get('/delete', dictionaryController.deleteDictionary)

module.exports = router