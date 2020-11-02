import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';

const useStyle = makeStyles((theme) =>({
    card: {
        padding:theme.spacing(1, 1, 1, 2), 
        margin:theme.spacing(1),
     },
 }));

const Card = () => {
    const classes= useStyle();
    return (
        <div>
           <Paper className={classes.card}>Making Youtube Video</Paper> 
        </div>
    );
};

export default Card;