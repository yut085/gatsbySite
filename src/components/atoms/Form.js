import React from 'react';
import { makeStyles } from '@material-ui/styles/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtil from '@date-io/date-fns';
import {
    KeyboardTimePicker,
    MultipickersUtilsprovider
} from '@material-ui/pickers';

const useStyle = makeStyles(theme => ({
    root: {
        color: "green"
    }
}))
const useStyle = makestyles(theme => ({

    container: {
        justifyContent: 'left',
        marginTop: 32,
        marginLeft: "3%",
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    report: {
        fontSize: "20px",
        fontweight: "bold",
        display: "relative",
        position: "relative",
        left: "30px",
        top: "20px"
    }
}));

export default function MultipickersUtilsprovider(props) {
    const classes = useStyles();
    const now = new Date();
    let montn = now.getMonth() + 1;
    let day = now.getDate();
    if (montn < 10) {
        month = "0" + montn;
    }
    if (day < 10) {
        day = "0" + day;
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date(`${now.getFullYear()}/${month}/${day} 10:00`));
    const [selectedDate2, setSelectedDate2] = React.useState(new Date(`${now.getFullYear()}/${month}/${day} 19:00`));

    const {
        reports
    } = props;
    const keys = reports
}