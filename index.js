const path = require('path');
const express = require('express');
const app = express();
//const constante='Este es el string de la constante constante';

const socket = require('socket.io');

// settings
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// listen the server
const server = app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});

const io = socket(server);
const constante='Este es el sreing de l const constante';
io.on('connection', (socket) => {
  console.log('socket connection opened:', socket.id);
  
  socket.on('chat:message', function(data) {
    io.sockets.emit('chat:message', data);
  });

  socket.on('chat:typing', function(data) {
    socket.broadcast.emit('chat:typing', data);
  });
});
console.log('Estoy en index.js');