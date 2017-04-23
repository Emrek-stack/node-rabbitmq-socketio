var config = require('../config');
var io = require('socket.io-client');
var socket = io.connect(config.socket.host, {reconnect: true});


socket.on('connect_error', function(err){
    console.log(err);
});

socket.on('disconnect', function () {
  console.log('Disconnected');
});

module.exports = socket; 