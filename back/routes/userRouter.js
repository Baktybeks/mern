const Router = require('express')
const { registerValidation } = require('../validations/auth');
const checkAuth = require('../middleware/checkAuth');

const userController = require('../controllers/userController')
const router = new Router()

router.post('/register', registerValidation, userController.register)
router.post('/login', userController.login)
router.get('/me',checkAuth , userController.getMe)


module.exports = router