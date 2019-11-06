import React from "react";
import ReactDOM from "react-dom"

import Chat from "./src/components/Chat/Chat.js"

function Index() {
  return (
    <div>
      <Chat />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById("root"))