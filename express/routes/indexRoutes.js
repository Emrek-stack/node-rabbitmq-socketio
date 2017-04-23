var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');


//GET
router.get('/list', function(req, res) {
    indexController.list(req, res);
});

//GET
router.get('/', indexController.index);



module.exports = router;