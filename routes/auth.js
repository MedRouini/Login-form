const express = require('express')
const router = express.Router()
const {login,register,helloName} = require('../controllers/auth')
const authMiddleware = require('../middlewares/auth-middleware')


router.route('/login').post(login)
router.route('/register').post(register)
router.route('/dashboard').get(authMiddleware,helloName)

module.exports = router;
