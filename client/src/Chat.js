import React, { useState, useEffect } from "react"
import queryString from 'query-string';
import socketIOClient from "socket.io-client";

export default function Chat() {
    const [chatName, setChatName] = useState("")
    const [chatText, setChatText] = useState("")
    const [chatNameContainer, setChatNameContainer] = useState([])
    const [chatTextContainer, setChatTextContainer] = useState([])
    const socket = socketIOClient('http://localhost:3000/')

    

    const sendText = (event) => {
        event.preventDefault();
        if (chatText) {
            socket.emit('chat-message-server', chatText, () => {

            })
            setChatText("");
        }

    }


    useEffect(() => {

        const { name } = queryString.parse(location.search)
        socket.emit('chat-name-server', (name))
        setChatName(name)

    }, [location.search]);


    useEffect(() => {
        // socket.on('chat-name-client', (name)=> {
        //     console.log(name)
        //     setChatName(name)   
        // });
        socket.on('chat-message-client', (textContent) => {
            console.log(textContent)
            // console.log(chatMessage, chatName)
            // setChatName(chatName)   
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
                    {chatName}{chatTextContainer.map((text, index) =>
                        <li key={index}>{chatName} : {text}</li>
                    )}
                </ul>
            </div>
            <div>
                <input placeholder="Press enter to send text" value={chatText} onChange={event => setChatText(event.target.value)}
                    onKeyPress={event => event.key === "Enter" ? sendText(event) : null}
                />
            </div>
        </div>
    )
}