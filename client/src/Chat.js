import React, { useState, useEffect } from "react"
import queryString from 'query-string';
import socketIOClient from "socket.io-client";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// ** CSS STYLES ** // 
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export default function Chat() {
    const [chatName, setChatName] = useState("")
    const [chatText, setChatText] = useState("")
    const [chatTextContainer, setChatTextContainer] = useState([])
    const socket = socketIOClient('https://react-socket-chat-app.herokuapp.com/')
    const classes = useStyles();



    const chatSend = (chatText) => {
        socket.emit('chat-message-server', chatText)
        setChatText("");
    }
    const sendChatInfo = (event, callback) => {
        event.preventDefault();
        if (chatText) {
            const { name } = queryString.parse(location.search)
            socket.emit('chat-name-server', (name))

            callback(chatText)
        }

    }


    useEffect(() => {

        const { name } = queryString.parse(location.search)
        socket.emit('chat-name-server', (name))
        setChatName(name)

    }, [location.search]);


    useEffect(() => {

        socket.on('chat-message-client', (textContent) => {
            console.log(textContent)
            setChatTextContainer([...chatTextContainer, textContent])
        }, [chatTextContainer]);
        return () => {
            socket.off();
        }

    }, [chatTextContainer])
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}> </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        {chatTextContainer.map((text, index) =>
                            <p key={index}>{text}</p>
                        )}
                    </Paper>
                </Grid>
                <Grid item xs={3}> </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <input placeholder="Press enter to send text" value={chatText} onChange={event => setChatText(event.target.value)}
                        onKeyPress={event => event.key === "Enter" ? sendChatInfo(event, chatSend) : null}/>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </div>
    )
}