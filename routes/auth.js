const express = require('express')
const router = express.Router()
const {login,register,helloWorld} = require('../controllers/auth')


router.route('/login').post(login)
router.route('/register').post(register)

module.exports = router;
