var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const { getUsers, createUser, loginUser } = require('../controllers/users.controller')

/* GET users listing. */
// api/users/
router.get('/', getUsers);

router.post('/', createUser);

// api/users/login
router.post('/login', loginUser);

module.exports = router;
