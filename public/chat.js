// conenction
let socket = io();

// DOM elements
let chatWindow= document.getElementById('chatWindow');
let form = document.getElementById('form');
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

form.addEventListener('submit', function(e)
{
  e.preventDefault();
  if (message.value)
  {
    socket.emit
    (
      'chat:message',
      {
        message: message.value,
        username: username.value
      }
    );
    message.value = '';
  }
});

message.addEventListener('keypress', function () {
  socket.emit('chat:typing', username.value);
});

socket.on('chat:message', function(data) {
  actions.innerHTML = '';
  output.innerHTML += `<p><strong>${data.username}</strong>: ${data.message}</p>`;
  console.log('Este es el ultimo mensaje del output: '+output.lastChild.innerHTML);
  //Vamos al pixel establecido(x,y), en caso de que el valor establecido sea mayor que la altura o anchura va al último
  chatWindow.scrollTo( 0, 100000000 );
});

socket.on('chat:typing', function(data) {
  actions.innerHTML =  `<p><em>${data} está escribiendo un mensaje...</em></p>`;
  chatWindow.scrollTo( 0, 100000000 );
});
