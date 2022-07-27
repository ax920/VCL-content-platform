import TextField from "@mui/material/TextField";
import {Autocomplete} from "@material-ui/lab";
import React from "react";


// @ts-ignore
const CategoriesMultiSelect = ({categories, setCategories}) => {

    //TODO replace dummy categories
    const dummyCategories = [{ // dummy categories
        name: "Workshops",
        id: 1
    },
        {
            name: "Conditions",
            id: 2
        }, {
            name: "Hiring",
            id: 3
        }, {
            name: "Meetings",
            id: 4
        }, {
            name: "Guest Speaker",
            id: 5
        }, {
            name: "Resources",
            id: 6
        },
    ]

    return (
        <Autocomplete
            style={{
                width: 317,
            }}
            multiple
            filterSelectedOptions
            getOptionSelected={(option, value) => option.name === value.name}
            // @ts-ignore
            onChange={(event, value) => setCategories(value)}
            ChipProps={{
                style: {
                    backgroundColor: "#1E5487",
                    borderRadius: "5px",
                    color: "#fff",
                }
            }}
            id="tags-standard"
            options={dummyCategories}
            getOptionLabel={option => option.name}
            renderInput={params => (
                <TextField
                    {...params}
                    style={{
                        borderRadius: "10px",
                    }}
                    variant="outlined"
                    label="Categories"
                    required={categories.length === 0}
                    id="custom-css-outlined-input"
                />
            )}
        />
    )
}

export default CategoriesMultiSelect
