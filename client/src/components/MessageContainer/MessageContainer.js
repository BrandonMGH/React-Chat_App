import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';

export default function MessageContainer(props) {
    const [message, setMessage ] = useState("");

    return (
        <div>
            <TextField
          label="Enter Message"
          margin="normal"
          multiline
          rows="4"
          fullWidth 
          value={message}
          onChange={(event) => {setMessage(event.target.value)}}
          onKeyDown={event => {
              if(event.key === "Enter"){
                  event.preventDefault();
                  props.onSendMessage(message); 
                  setMessage("");
              }
          }}
        />

        </div>
    )
}
