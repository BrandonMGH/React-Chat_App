import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReactLogo from './Images/ReactLogo.png'




const useStyles = makeStyles(theme => ({
    body: {
        flexGrow: 1,
        backgroundColor: "black"
    },
    chatTitle: {
        color: "white"
    },
    chatBox: {
        textAlign: "center",
        border: "2px solid white",
        padding: "5%",
        color: "white"
    },
    container: {
        display: 'grid',
        paddingBottom: "10%",
        paddingTop: "10%"
    },
    hover: {
        
    },
}));




export default function Join() {
    const [chatName, setChatName] = useState("")
    const [backgroundColor, setBackgroundColor] = useState("white")
    const [color, setColor] = useState("black")
    const classes = useStyles();

    let colorOn = function () {
        setColor("white")
        setBackgroundColor("Grey")
    }

    let colorOff = function () {
        setColor("black")
        setBackgroundColor("white")
    }
    return (
        <div className={classes.body} >
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={4} style={{ paddingBottom: "15%", paddingTop: "15%" }}>
                    <div className={classes.chatBox}>
                        <div>
                            <h1 className={classes.chatTitle}> Welcome to React-Chat</h1>
                        </div>
                        <div>
                            <img src={ReactLogo} style={{width: "75%"}} />
                        </div>
                        <hr />
                        <div className={classes.container}>
                            <label style={{padding: "2%"}}><b>Enter Name</b></label>
                            <div>
                                <input style={{ backgroundColor: "black", color: "white", textAlign: "center", width: "50%", padding: "2%"}}onChange={event => setChatName(event.target.value)} />
                            </div>
                        </div>
                        <div>
                            <Link style={{textDecoration: "none"}} onClick={event => (!chatName) ? event.preventDefault() : null} to={`/chat?name=${chatName}`}>
                                    <div onMouseEnter={colorOn} onMouseLeave={colorOff} style={{ backgroundColor:backgroundColor , textAlign: "center", color: color, marginRight: "20%", marginLeft: "20%"}}>
                                     <p style={{padding: "5%" }}>JOIN THE CHAT</p>
                                    </div>
                            </Link>
    
                        </div>
                    </div>

                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </div>
    )
}