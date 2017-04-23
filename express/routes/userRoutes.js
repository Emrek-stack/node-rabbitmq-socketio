var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController');

//GET
router.get('/', userController.index);

module.exports = router;
