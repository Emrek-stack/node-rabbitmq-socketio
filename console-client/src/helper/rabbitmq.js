#!/usr/bin/env node
var config = require('../../config');
var amqp = require('amqplib/callback_api');


var connection = null;


exports.connect = function (err, done) {
    if (connection) return done();

    amqp.connect(config.amqp.host, function (err, conn) {
        if (err) return done(err);
        connection = conn;
       
        return conn;
    });
}


exports.push = function (err, ch, exhange, message) {
  var conn =   this.connect(function (err) {
        if (err) {
            console.log('Unable to connect to Mongo.')
            process.exit(1)
        } else {
            console.log("connected");
        }
    }, function(done){
        console.log('connected');
    });

    //console.log(connection);
    conn.createChannel(function (err, ch) {
        ch.assertExchange(exchange, 'fanout', { durable: false });
        ch.publish(ex, '', new Buffer(message));
        console.log(" [x] Sent %s", msg);
    });
}
