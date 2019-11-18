const express = require("express")
const app = express();
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const users = []
let id = ""

const getUser = (object, callback) => {
  callback(object)
}

io.on('connection', function(socket){
    socket.on('chat-name-server', name => {
      // users[socket.id] = name
      // console.log(name)   
      id = socket.id
      let newUser = {id, name}
      users.push(newUser)
      // console.log(users)
      io.emit('chat-name-client', name)
    });
    socket.on('chat-message-server', function(chatText) {
      let user; 
      console.log(id)
      getUser(users, () =>{
        for(let i=0; i < users.length; i++){
          user = (users[i].id)
        }
      })
      console.log(chatText, user)
      let textContent = (user + ":" + chatText)
      io.emit('chat-message-client', textContent);
    });
    socket.on("disconnect", function (){
      console.log("Disconnected")
  });
  });


http.listen(PORT, () =>{
    console.log("listening on port: " + PORT)
})