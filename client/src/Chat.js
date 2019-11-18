import React, { useState, useEffect } from "react"
import queryString from 'query-string';
import socketIOClient from "socket.io-client";

export default function Chat() {
    const [chatName, setChatName] = useState("")
    const [chatText, setChatText] = useState("")
    const [chatNameContainer, setChatNameContainer] = useState([])
    const [chatTextContainer, setChatTextContainer] = useState([])
    const socket = socketIOClient('http://localhost:3000/')

    
    const chatSend = (chatText) =>{
        socket.emit('chat-message-server', chatText)
        setChatText("");  
    }
    const sendText = (event, callback) => {
        event.preventDefault();
        if (chatText) {
            const {name}  = queryString.parse(location.search)
            socket.emit('chat-name-server', (name))
            setChatName(name)
            callback(chatText)
        }

    }


    useEffect(() => {

        const {name}  = queryString.parse(location.search)
        socket.emit('chat-name-server', (name))
        setChatName(name)

    }, [location.search]);


    useEffect(() => {
       
        socket.on('chat-message-client', (textContent) => {
            console.log(textContent)  
            setChatTextContainer([...chatTextContainer, textContent])
        }, [chatTextContainer]);
        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [chatTextContainer])
    return (

        <div>
            <h1>Welcome {chatName}!</h1>
            <div>
                <ul>
                  {chatTextContainer.map((text, index) =>
                        <li key={index}>{text}</li>
                    )}
                </ul>
            </div>
            <div>
                <input placeholder="Press enter to send text" value={chatText} onChange={event => setChatText(event.target.value)}
                    onKeyPress={event => event.key === "Enter" ? sendText(event, chatSend) : null}
                />
            </div>
        </div>
    )
}