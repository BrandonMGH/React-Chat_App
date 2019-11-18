const express = require("express")
const app = express();
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const users = []

const getUser = (object, callback) => {
  callback(object)
}

io.on('connection', function(socket){
    socket.on('chat-name-server', name => {
      // users[socket.id] = name
      // console.log(name)   
      let id = socket.id
      let newUser = {id, name}
      users.push(newUser)
      // console.log(users)
      io.emit('chat-name-client', name)
    });
    socket.on('chat-message-server', function(chatText) {
      let user = getUser(users, () =>{
        return(users[0].id)
      })
      console.log(chatText, user)
      // let textContent = (users[socket.id] + ":" + chatText)
      io.emit('chat-message-client', chatText);
    });
    socket.on("disconnect", function (){
      console.log("Disconnected")
  });
  });


http.listen(PORT, () =>{
    console.log("listening on port: " + PORT)
})