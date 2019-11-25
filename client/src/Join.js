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
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: "30vh",
        backgroundColor: "black",

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
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));




export default function Join() {
    const [chatName, setChatName] = useState("")
    const classes = useStyles();
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
                            <label><b>Enter Name</b></label>
                            <div>
                                <input style={{ backgroundColor: "black", color: "white", textAlign: "center", width: "50%"}}onChange={event => setChatName(event.target.value)} />
                            </div>
                        </div>
                        <div>
                            <Link style={{textDecoration: "none"}} onClick={event => (!chatName) ? event.preventDefault() : null} to={`/chat?name=${chatName}`}>
                                    <div style={{ backgroundColor: "white", textAlign: "center", color: "black", marginRight: "20%", marginLeft: "20%"}}>
                                     <p style={{padding: "5%"}}>JOIN THE CHAT</p>
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