const express = require("express")
const app = express();
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);



io.on('connection', function(socket){
    socket.on('chat-message-server', function(chatInfo){
      console.log('message: ' + chatInfo.socketName + " and " + chatInfo.socketText);
      io.emit('chat-message-client', chatInfo);
    });
  });


http.listen(PORT, () =>{
    console.log("listening on port: " + PORT)
})