import TextField from "@mui/material/TextField";
import React from "react";
import {Autocomplete} from "@mui/material";

// @ts-ignore
const CategoriesMultiSelect = ({categories, setCategories}) => {

    //TODO replace dummy categories
    const dummyCategories = [{ // dummy categories
        name: "Workshops",
    },
        {
            name: "Conditions",

        }, {
            name: "Hiring",

        }, {
            name: "Meetings",

        }, {
            name: "Guest Speaker",

        }, {
            name: "Resources",

        },
    ]

    return (
        <Autocomplete
            style={{
                width: 317,
            }}
            multiple
            filterSelectedOptions
            // @ts-ignore
            isOptionEqualToValue={(option, value) => option.name === value.name}
            // @ts-ignore
            onChange={(event, value) => setCategories(value)}
            ChipProps={{
                style: {
                    backgroundColor: "#1E5487",
                    borderRadius: "5px",
                    color: "#fff",
                }
            }}
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
                />
            )}
        />
    )
}

export default CategoriesMultiSelect
