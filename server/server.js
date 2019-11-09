const express = require("express")
const app = express();
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);



io.on('connection', function(socket){
    socket.on('chat message', function(test){
    //   console.log('message: ' + test);
      io.emit('chat message', test);
    });
  });


http.listen(PORT, () =>{
    console.log("listening on port: " + PORT)
})