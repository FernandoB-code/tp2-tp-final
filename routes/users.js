var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const { getProductos, createUser, loginUser } = require('../controllers/users.controller')

/* GET users listing. */
// api/users/
router.get('/', getProductos);

router.post('/', createUser);

// api/users/login
router.post('/login', loginUser);

module.exports = router;
