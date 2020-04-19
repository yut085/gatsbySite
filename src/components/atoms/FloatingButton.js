import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function FloatingButton(props) {
    const classes = useStyles();
    const {onClick} = props;

    return (
        <div className={classes.root}>
            <Button onClick={onClick}>
                <Bu>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Bu>
            </Button>
        </div>
    );
}

const Bu = styled.div`
    margin: theme.spacing(1);
    position: fixed;
    right: 2em;
    bottom: 2em;
`