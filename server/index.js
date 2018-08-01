'use strict';

// all necessary libs
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mockData = require('./mock-data');
const circlePoints = require('./circle-points');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const rand = (num) => Math.floor(Math.random() * num + 1);
// configuration
const WEBSOCKET_PORT = 3000;

// manage connected clients
let clientsSocket = new Set();

// start a websocket server
server.listen(WEBSOCKET_PORT);

// manage clients that should get data
io.on('connection', socket => {
  clientsSocket.add(socket);

  socket.emit('init', mockData);

  socket.on('disconnect', () => {
    clientsSocket.delete(socket);
  });

  sleep(1000).then(() => {
    delayedData(socket);
  });
});
const lastPoint = []
for (let point of mockData) {
    lastPoint.push({id: point.id, index: rand(360)});
}

const delayedData = (socket) => {
    const data = lastPoint.map(lp => {
        const data = mockData.find(md => md.id === lp.id);
        lp.index = (rand(3) + lp.index) % 360;
        return {longitude: data.longitude + circlePoints[lp.index].longitude, latitude: data.latitude + circlePoints[lp.index].latitude, id: lp.id};
    });
    socket.emit('data', data);
    sleep(1000).then(() => {
        delayedData(socket);
      });
}
