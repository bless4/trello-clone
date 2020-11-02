import { Paper } from '@material-ui/core';
import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyle = makeStyles((theme) =>({
         root:{
             marginTop:theme.spacing(2),
         },
    addCard: {
        padding:theme.spacing(1, 1, 1, 2), 
        margin:theme.spacing(0, 1, 1, 1),
        background:'#EBECF0',
        "&:hover":{
            backgroundColor:fade('#000',0.25),
        }
     },
 }));

const InputContainer = () => {
    const classes= useStyle();
    return (
        <div className={classes.root}>
        <Paper className={classes.addCard} elevation={0}>
            <Typography>+ Add a Card</Typography>
        </Paper>
        </div>
    );
};

export default InputContainer;