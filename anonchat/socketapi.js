const socketio = require('socket.io');

let io;

function init(server) {
  io = socketio(server);

  io.on('connection', (socket) => {
    console.log(`Socket ${socket.id} connected.`);

    socket.on('chatMessage', (message) => {
      io.emit('chatMessage', message);
    });

    socket.on('disconnect', () => {
      console.log(`Socket ${socket.id} disconnected.`);
    });
  });
}

function getIo() {
  if (!io) {
    throw new Error('Socket.io not initialized.');
  }
  return io;
}

module.exports = {
  init,
  getIo,
};
