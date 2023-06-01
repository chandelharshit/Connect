const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('code-change', (newCode) => {
    io.emit('code-update', newCode);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const port = 5000; // Set your desired port number
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
