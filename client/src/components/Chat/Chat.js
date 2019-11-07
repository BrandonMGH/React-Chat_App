import React from 'react'

import MessageContainer from "../MessageContainer/MessageContainer.js"
import Messages from "../Message/Message.js"

export default function Chat() {
    return (
        <div>
            <Messages message={[
                "Hello this is message 1!",
                "Hello this is message 1!",
                "Hello this is message 1!",
                "Hello this is message 1!",
                "Hello this is message 1!",
            ]
            } />
            <MessageContainer onSendMessage={message => {
                console.log("Message sent: " + message)
            }} /> 
        </div>
    )
}
