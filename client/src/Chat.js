import React, { useState, useEffect } from "react"
import queryString from 'query-string';
import socketIOClient from 'socket.io-client';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import friendsBackground6 from './Images/friendsBackground6.png'


// ** CSS STYLES ** // 
import '../font.css'
import './fonts/FiraSans-Regular.ttf'

const useStyles = makeStyles(theme => ({
    body: {
        flexGrow: 1,
        backgroundImage: `url(${friendsBackground6})`,
        paddingTop: '50px',
        backgroundSize: 'cover',
        fontFamily: 'FiraSans'

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: '70vh',
        overflow: 'auto',
        flex: 'auto',
        border: 'solid 5px #264abf'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '2%'
    },
}));

//** REACT COMPONENT  **//

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
        <div className={classes.body} >
            <Grid container spacing={3}>
                <Grid item xs={8}> </Grid>
                <Grid item xs={4}>
                    <p style={{ color: "white", backgroundColor: "#264abf", padding: "2%", borderRadius: "2%", marginBottom: "-2%", marginRight: "2%", marginLeft: "2%" }}>REACT CHAT</p>
                    <div style={{ textAlign: "center", color: "white", margin: "2%" }}>
                        <Paper className={classes.paper}>
                            {chatTextContainer.map((text, index) =>
                                <p key={index} style={{ textAlign: "left" }}>{text}</p>
                            )}

                        </Paper>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={8}></Grid>
              
                <Grid item xs={4}>
                <TextField
                        className={classes.container}
                        id="standard-full-width"
                        style={{ margin: 8}}
                        placeholder="Press enter to send text"
                        margin="normal"
                        value={chatText}
                        onChange={event => setChatText(event.target.value)}
                        onKeyPress={event => event.key === "Enter" ? sendChatInfo(event, chatSend) : null}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{ backgroundColor: "white", border: "solid 5px #264abf" }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}