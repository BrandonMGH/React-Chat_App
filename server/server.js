const express = require("express")
const app = express(); 
const PORT = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on("connection", function (socket) {
    console.log("Connected established!");
    socket.on("message", function (data) {
        console.log("Message received:", data)
    });
    socket.on("disconnect", function (){});
});

http.listen(PORT, () => {
    console.log(`Connected on Port: ${PORT}`)
})