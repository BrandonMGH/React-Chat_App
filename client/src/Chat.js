import React, { useState, useEffect } from "react"
import queryString from 'query-string';
import socketIOClient from "socket.io-client";

export default function Chat() {
    const [urlParam, seturlParam] = useState("")
    const [chatText, setChatText] = useState("")

    const socket = socketIOClient('http://localhost:3000/')
    
   

    let test = (chatText) => {
        socket.emit('chat message', chatText);
    }

    useEffect((chatText) => {

        const { name } = queryString.parse(location.search)
        console.log(name)
        const test = "Yay, it works"
        seturlParam(name)
        


    }, [location.search]);
    return (
        <div>
            <div>
                <input onChange={event => setChatText(event.target.value)} />
            </div>
            <button onClick={test(chatText)} />
        </div>
        
    )
}