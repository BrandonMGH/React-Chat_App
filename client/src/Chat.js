import React, { useState, useEffect } from "react"
import queryString from 'query-string';
import socketIOClient from "socket.io-client";

export default function Chat() {
    const [socketName, setSocketName] = useState("")
    const [socketText, setSocketText] = useState("")
    const [chatName, setChatName] = useState("")
    const [chatText, setChatText] = useState("")
    const [chatNameContainer, setChatNameContainer] = useState([])
    const [chatTextContainer, setChatTextContainer] = useState([])

    const socket = socketIOClient('http://localhost:3000/')

   

    let socketObject = {
        socketName: socketName,
        socketText: socketText
    }

    let handleSubmit = (event) => {

        event.preventDefault();
        socket.emit('chat-message-server', socketObject);
        console.log("a single test")
    }

    let handleInputChant = (event) => {
        setSocketText(event)
        console.log(event)

    }


    useEffect(() => {

        const { name } = queryString.parse(location.search)
        console.log(name)
        setSocketName(name)



    }, [location.search]);

    useEffect(() =>{
        socket.on('chat-message-client', (msg) => {
            console.log(msg)
            // setChatName(msg.socketText)
            // setChatText(msg.socketText)
            setChatTextContainer([...chatTextContainer, msg.socketText])
           
        }, [chatTextContainer]);

    })
    return (
        <div>
            <p>{socketName}:{chatText}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    ChatBox:
                <input
                        type="text"
                        value={socketText}
                        onChange={e => handleInputChant(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}