const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || 3080;

const { addUser, removeUser, getUser,getUsersInRoom
} = require('./users.js')

const router = require("./router.js");


const app = express(); 
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) =>{

    socket.on('join', ({name, room}, callback) => {
        const {error, user } = addUser({ id: socket.id, name, room});
        if(error) {return callback(error)}; 

        socket.emit('message', {user: 'admin', text: `Hello ${user.name}, Welcome to the ${user.room} chatroom` })

        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined the chat!`});

        socket.join(user.room);
        
        callback(); 
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message})

        callback(); 
    })
    socket.on("disconnect", () => {
        console.log("User has disconnected!!!")
    });
})

app.use(router);

server.listen(PORT, () =>{
    console.log("Listening on Port " + PORT)
})

