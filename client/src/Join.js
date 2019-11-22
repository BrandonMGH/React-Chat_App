import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    root: {
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
        color:"black"
    },
    chatBox: {
        textAlign: "center",
        border: "2px solid black",
        backgroundColor: "white",
        padding: "5%"
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        textColor: 'white'
    },
}));


export default function Join() {
    const [chatName, setChatName] = useState("")
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Grid container spacing={3}>
                <Grid item xs>
                </Grid>
                <Grid item xs={4} style={{ paddingBottom: "15%", paddingTop: "15%" }}>

                    <Paper className={classes.paper}>
                        <div className={classes.chatBox}>
                            <div>
                                <h1 className={classes.chatTitle}> Join The Conversation</h1>
                            </div>
                            <hr></hr>
                            <div>
                                <div className={classes.container}>
                                    <div>
                                        <TextField
                                            label="Brandon"
                                            id="margin-none"
                                            defaultValue="Default Value"
                                            className={classes.textField}
                                            onChange={event => setChatName(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link onClick={event => (!chatName) ? event.preventDefault() : null} to={`/chat?name=${chatName}`}>
                                    <button type="submit">Sign In</button>
                                </Link>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                </Grid>
            </Grid>
        </div>

        // <div style={{textAlign: "center"}}>
        //     <div>
        //         <h1> Join The Conversation</h1>
        //     </div>
        //     <hr></hr>
        //     <div>
        //         <input onChange={event => setChatName(event.target.value)} />
        //     </div>
        //     <div>
        //     <Link onClick={event => (!chatName) ? event.preventDefault() : null} to={`/chat?name=${chatName}`}>
        //   <button type="submit">Sign In</button>
        // </Link>
        //     </div>
        // </div>
    )
}