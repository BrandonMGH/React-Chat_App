import React,{useEffect, useRef, useState} from 'react'
import socketIOClient from 'socket.io-client';

import MessageContainer from "../MessageContainer/MessageContainer.js"
import Messages from "../Messages/Messages.js"

export default function Chat() {
     const [messages, setMessages] = useState([]);
     const socketRef = useRef(); 

    useEffect(() =>{
        socketRef.current = socketIOClient("http://localhost:3000")

        socketRef.current.on("chatMessage", (data) => {
            console.log('a user connected');
        });

        return () => {
            socketRef.current.disconnect(); 
        }

        
    });

    const sendMessage = (message) => {
        socketRef.current.emit("message", message)
    };

    return (
        <div>
            <Messages messages={messages}/>
            <MessageContainer onSendMessage={message => {
                sendMessage(message);
            }} /> 
        </div>
    )
}
