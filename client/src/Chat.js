import React, { useState, useEffect } from "react"
import queryString from 'query-string';
import socketIOClient from "socket.io-client";

export default function Chat() {
    const [urlParam, seturlParam] = useState("")
    const [chatText, setChatText] = useState("")

    const socket = socketIOClient('http://localhost:3000/')
    
   

    let handleSubmit = (event) => {
        // socket.emit('chat message', chatText);
        event.preventDefault(); 
        console.log(chatText)
    }

    useEffect((chatText) => {

        const { name } = queryString.parse(location.search)
        console.log(name)
        const test = "Yay, it works"
        seturlParam(name)
        


    }, [location.search]);
    return (
        <form onSubmit={handleSubmit}>
        <label>
          Frirst Name:
          <input
            type="text"
            value={chatText}
            onChange={e => setChatText(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
        
    )
}