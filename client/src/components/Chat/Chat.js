import React from 'react'

import MessageContainer from "../MessageContainer/MessageContainer.js"

export default function Chat() {
    return (
        <div>
            <MessageContainer onSendMessage={message => {
                console.log("Message sent: " + message)
            }} /> 
        </div>
    )
}
