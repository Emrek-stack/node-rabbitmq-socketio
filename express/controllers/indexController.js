var db = require('../helper/db')
var Client = require('node-rest-client').Client;
var client = new Client();


module.exports = {
    index: function(req, res) {
        //var collection = db.get().collection('items');
        res.render('index');
    },

    list: function(req, res) {
        client.get("http://mservice.fanatik.com.tr/MainPage", function(data, response) {
            res.json(data)
        });
    }
}