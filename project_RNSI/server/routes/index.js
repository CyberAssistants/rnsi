const Router = require('express')
const router = new Router()
const dictionaryRouter = require('./dictionaryRouter')
const oidRouter = require('./oidRouter')
const configRouter = require('./configRouter')

router.use('/dictionary', dictionaryRouter)
router.use('/oid', oidRouter)
router.use('/config', configRouter)

module.exports = router