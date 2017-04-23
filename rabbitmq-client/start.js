#!/usr/bin/env node

var config = require('./config');
var socket = require('./helper/socket');

var amqp = require('amqplib/callback_api');

amqp.connect(config.amqp.host, function(err, conn) {
  conn.createChannel(function(err, ch) {

    ch.assertExchange(config.amqp.exchange, 'fanout', {durable: false});

    ch.assertQueue('', {exclusive: true}, function(err, q) {
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
      ch.bindQueue(q.queue, config.amqp.exchange, '');

      ch.consume(q.queue, function(msg) {
        console.log(" [x] %s", msg.content.toString());
        socket.emit('CH01', 'me', msg.content.toString());

      }, {noAck: true});
    });
  });
});