import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReactLogo from './Images/ReactLogo.png'
import friendsBackground2 from './Images/friendsBackground2.png'
import '../index.css'
import './fonts/FiraSans-Regular.ttf'




const useStyles = makeStyles(() => ({
    body: {
        flexGrow: 1,
        backgroundImage: `url(${friendsBackground2})`,
        backgroundSize: 'cover',
    },
    chatTitle: {
        color: "white",
        fontFamily: "FiraSans"
    },
    chatBox: {
        textAlign: "center",
        border: "2px solid white",
        padding: "5%",
        color: "white",
        backgroundColor: "#264abf",
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
    const [color, setColor] = useState("#264abf")
    const classes = useStyles();

    let colorOn = function () {
        setColor("white")
        setBackgroundColor("#264abf")
    }

    let colorOff = function () {
        setColor("#264abf")
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
                            <img src={ReactLogo} style={{ width: "75%" }} />
                        </div>
                        <hr />
                        <div className={classes.container}>
                            <label style={{ padding: "2%" }}><b>Enter Name</b></label>
                            <div>
                                <input style={{ backgroundColor: "white", color: "black", textAlign: "center", width: "50%", padding: "2%" }} onChange={event => setChatName(event.target.value)} />
                            </div>
                        </div>
                        <div>
                            <Link style={{ textDecoration: "none" }} onClick={event => (!chatName) ? event.preventDefault() : null} to={`/chat?name=${chatName}`}>
                                <div onMouseEnter={colorOn} onMouseLeave={colorOff} style={{ backgroundColor: backgroundColor, color: color, border: "white 2px solid", textAlign: "center", marginRight: "20%", marginLeft: "20%", marginBottom: "10%" }}>
                                    <p>JOIN THE CHAT</p>
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