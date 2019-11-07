const express = require("express")
const app = express();
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);



http.listen(PORT, () =>{
    console.log("listening on port: " + PORT)
})