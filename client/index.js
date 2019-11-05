import socketIOClient from "socket.io-client"

const socket = socketIOClient ('http://localhost:3000/'); 
socket.on('connect', function () {
  socket.send("hi");

  socket.on("message", function (msg){

  }); 
});
// import React from "react"
// import ReactDom from "react-dom"
// import Button from '@material-ui/core/Button';

// function Index() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   );
// }

// ReactDom.render(<Index />, document.getElementById("root"))