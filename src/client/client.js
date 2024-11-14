const io = require('socket.io-client');
const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Connected to WebSocket server!');
    socket.emit('message', { username: 'user1', message: 'Hello from Node.js!' });
});

socket.on('message', (msg) => {
    console.log('Received message:', msg);
});
