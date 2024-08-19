const Router = require('express')
const router = new Router()
const configController = require('../controllers/configController')

router.post('/', configController.create)

module.exports = router