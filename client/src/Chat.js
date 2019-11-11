import React, { useState, useEffect } from "react"
import queryString from 'query-string';
import socketIOClient from "socket.io-client";

export default function Chat() {
    const [socketName, setSocketName] = useState("")
    const [socketText, setSocketText] = useState("")
    const [chatText, setChatText] = useState([])
    const [chatName, setChatName] = useState([])


    const socket = socketIOClient('http://localhost:3000/')

    console.log(chatText)

    let socketObject = {
        socketName: socketName,
        socketText: socketText
    }

    let handleSubmit = (event) => {

        event.preventDefault();
        socket.emit('chat message', socketObject);
        console.log(socketObject)

    }

    socket.on('chat message', function (msg) {
        setChatText(msg.socketText)
        setChatName(msg.socketName)
        console.log(chatText)
    });

    useEffect((chatText) => {

        const { name } = queryString.parse(location.search)
        console.log(name)
        setSocketName(name)



    }, [location.search]);
    return (
        <div>
            <p>{socketName}:{chatText}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    ChatBox:
          <input
                        type="text"
                        value={socketText}
                        onChange={e => setSocketText(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}