const express    = require('express')
const router     = express()
const emp        = require('../controller/emp')

router.post('/create', emp.createEmp)
router.patch('/:id', emp.updateEmp)

module.exports = router