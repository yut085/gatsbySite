import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtil from '@date-io/date-fns';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ClearIcon from '@material-ui/icons/Clear';
import {
    KeyboardTimePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import styled from 'styled-components';

const iconStyles = makeStyles(theme => ({
    root: {
        color: "green"
    }
}))
const useStyles = makeStyles(theme => ({

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
}));

export default function MultipleTextFilelds(props) {
    const classes = useStyles();
    const iconClasses = iconStyles();
    const now = new Date();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    const [selectedDate, setSelectedDate] = React.useState(new Date(`${now.getFullYear()}/${month}/${day} 10:00`));
    const [selectedDate2, setSelectedDate2] = React.useState(new Date(`${now.getFullYear()}/${month}/${day} 19:00`));

    const {

    } = props;

    return (
        <>
        <Position>
            <Margin>
                <ClearIcon
                    variant="outlined"
                />
            </Margin>
        </Position>

        <div className={classes.root}><MenuBookIcon className={iconClasses.root} fontSizeLarge />金額入力</div>
        <form className={classes.container} noValidate autoComplete="off">
            <MuiPickersUtilsProvider utils={DateFnsUtil}>
                <Grid>
                    <KeyboardTimePicker className={classes.textField}
                    margin="normal"
                    id="time-picker"
                    label="出勤時間"
                    value={selectedDate}
                    onChange={() => {

                    }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid>
                    <KeyboardTimePicker className={classes.textField}
                    margin="normal"
                    id="time-picker"
                    label="退勤時間"
                    value={selectedDate2}
                    onChange={() => {

                    }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>

            <TextField
                    placeholder=""
                    multiline
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    rowsMax="5"
                    rows="5"
                    onChange={() => {

                    }}
            />
        </form>
        </>
    )
}

const Margin = styled.div`
    margin-right: 10px;
    margin-top: 5px;
    display: inline-block;
`

const Position = styled.div`
    display: flex;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-top: 10px;
    justify-content: flex-end;
`