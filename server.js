const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server);
//Set static folder

app.use(express.static(path.join(__dirname, 'public')))


//Run When Client Connects
io.on('connection', socket => {
    console.log('New WS Connection');

    socket.emit('message', 'Welcome To ChatApp');
})

const port = 3000 || process.env.PORT;
const hostname = 'localhost'

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});