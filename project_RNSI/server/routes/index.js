const Router = require('express')
const router = new Router()
const dictionaryRouter = require('./dictionaryRouter')
const configRouter = require('./configRouter')

router.use('/dictionary', dictionaryRouter)
router.use('/config', configRouter)

module.exports = router