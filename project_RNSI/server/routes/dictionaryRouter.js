const Router = require('express')
const router = new Router()
const dictionaryController = require('../controllers/dictionaryController')

router.get('/getAllDictionary', dictionaryController.getAllDictionary)
router.get('/getDictionary', dictionaryController.getDictionary) //параметр oid
router.get('/getDataDictionary', dictionaryController.getDataDictionary) //параметр oid, version

router.post('/postAllDictionary', dictionaryController.postAllDictionary)
router.post('/postDataDictionary', dictionaryController.postDataDictionary)


router.delete('/delete', dictionaryController.deleteDictionary)

module.exports = router