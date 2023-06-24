const socket = io();

const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = messageInput.value;
  if (message.trim()) {
    socket.emit('chatMessage', message);
    messageInput.value = '';
  }
});

socket.on('chatMessage', (message) => {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
});
