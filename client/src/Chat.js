import React, { useState, useEffect } from "react"
import queryString from 'query-string';
import socketIOClient from "socket.io-client";

export default function Chat() {
    const [chatName, setChatName] = useState("")
    const [chatText, setChatText] = useState("")
    const [chatNameContainer, setChatNameContainer] = useState([])
    const [chatTextContainer, setChatTextContainer] = useState([])

    const socket = socketIOClient('http://localhost:3000/')


    // let handleSubmit = (event) => {

    //     event.preventDefault();
    //     socket.emit('chat-message-server', socketObject);
    //     console.log("a single test")
    // }

    // let handleInputChant = (event) => {
    //     setSocketText(event)
    //     console.log(event)

    // }

    const sendText = (event) => {
        event.preventDefault();
        if (chatText) {
            socket.emit('chat-message-server', chatText, () => {
                setChatText("");
            })

        }
    }

    // console.log(chatText, chatTextContainer )


    useEffect(() => {

        const { name } = queryString.parse(location.search)
        console.log(name)
        setChatName(name)



    }, [location.search]);

    useEffect(() => {
        socket.on('chat-message-client', (msg) => {
            // setChatName(msg.socketText)
            // setChatText(msg.socketText)
            setChatTextContainer([...chatTextContainer, msg])
            console.log(chatTextContainer)
        }, [chatTextContainer]);
        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [chatTextContainer])
    return (
        // <div>
        //     <p>{socketName}:{chatText}</p>
        //     <form onSubmit={handleSubmit}>
        //         <label>
        //             ChatBox:
        //         <input
        //                 type="text"
        //                 value={socketText}
        //                 onChange={e => handleInputChant(e.target.value)}
        //             />
        //         </label>
        //         <input type="submit" value="Submit" />
        //     </form>

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
                <input value={chatText} onChange={event => setChatText(event.target.value)}
                    onKeyPress={event => event.key === "Enter" ? sendText(event) : null}
                />
            </div>
        </div>
    )
}