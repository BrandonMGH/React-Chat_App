import React from 'react'

import MessageContainer from "../MessageContainer/MessageContainer.js"
import Messages from "../Messages/Messages.js"

export default function Chat() {
    return (
        <div>
            <Messages messages={
                [
                    "message one",
                    "message two",
                    "message three",
                    "message four",
                    "message five"
                ]
            }
            
            />
            <MessageContainer onSendMessage={message => {
                console.log("Message sent: " + message)
            }} /> 
        </div>
    )
}
