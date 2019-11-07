import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Join() {
    const [name, setName] = useState("")
    return (
        <div>
            <div>
                <h1> Join The Conversation</h1>
            </div>
            <div>
                <input onChange={event => setName(event.target.value)} />
            </div>
            <div>
            <Link onClick={event => (!name) ? event.preventDefault() : null} to={`/chat?name=${name}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
            </div>
        </div>
    )
}