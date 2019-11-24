import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



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
        flexWrap: 'wrap',
        paddingBottom: "10%"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        textColor: 'white'
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
                        <hr></hr>
                        <div className={classes.container}>
                            <label><b>Name</b></label>
                            <div>
                                <input style={{ backgroundColor: "black" }}onChange={event => setChatName(event.target.value)} />
                            </div>
                        </div>
                        <div>
                            <Link onClick={event => (!chatName) ? event.preventDefault() : null} to={`/chat?name=${chatName}`}>
                                    <Button type="submit" variant="contained" > Join the Conversation</Button>
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