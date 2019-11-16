const express = require("express")
const app = express();
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const users = {}

io.on('connection', function(socket){
    socket.on('chat-name-server', name => {
      users[socket.id] = name 
      console.log(name)
      io.emit('chat-name-client', name)
    });
    socket.on('chat-message-server', function(chatText) {
      console.log(users)
      console.log(chatText);
      io.emit('chat-message-client', { chatText: chatText, name: users });
    });
    socket.on("disconnect", function (){
      console.log("Disconnected")
  });
  });


http.listen(PORT, () =>{
    console.log("listening on port: " + PORT)
})