const express = require("express")
const app = express();
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

const users = []
let user; 
let IDs = []
let ID = ""

app.use(cors());

const getUser = (object, callback) => {
  callback(object)
}

app.get('/', (req, res) => {
  res.send("server is running")
})

io.on('connection', function(socket){
    socket.on('chat-name-server', name => {
      ID = socket.id
      IDs.push(ID)
      let newUser = {ID, name}
      users.push(newUser)
      io.emit('chat-name-client', name)
    });
    socket.on('chat-message-server', function(chatText) { 
      getUser(users, () =>{
        for(let i=0; i < users.length; i++){
          for(let j =0; j < IDs.length; j ++){
           if(users[i].ID === IDs[j]){
             user = (users[i].name)
           }
          }
        }
      })
      console.log(chatText, user)
      let textContent = (user + ":" + chatText)
      io.emit('chat-message-client', textContent);
    });
    
  });


http.listen(PORT, () =>{
    console.log("listening on port: " + PORT)
})