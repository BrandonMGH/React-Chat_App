import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Join() {
    const [chatName, setChatName] = useState("")
    return (
        <div>
            <div>
                <h1> Join The Conversation</h1>
            </div>
            <div>
                <input onChange={event => setChatName(event.target.value)} />
            </div>
            <div>
            <Link onClick={event => (!chatName) ? event.preventDefault() : null} to={`/chat?name=${chatName}`}>
          <button type="submit">Sign In</button>
        </Link>
            </div>
        </div>
    )
}