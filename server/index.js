const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router.js");

const app = express(); 
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

server.listen(PORT, () =>{
    console.log("Listening on Port " + PORT)
})

