import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";

// @ts-ignore
const DatePicker = ({date, setDate}) => {
    const handleDateChange = (date: any) => {
        setDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                autoOk={true}
                required
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label": "change date"
                }}
            />
        </MuiPickersUtilsProvider>
    );
}
export default DatePicker