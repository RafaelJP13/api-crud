const express    = require('express')
const router     = express()
const emp        = require('../controller/emp')

router.post('/create', emp.create)

module.exports = router