import DateFnsUtils from "@date-io/date-fns";
import React from "react";

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = React.useState(
    );
    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                required
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id="date-picker-inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label": "change date"
                }}
            />
        </MuiPickersUtilsProvider>
    );
}
export default DatePicker