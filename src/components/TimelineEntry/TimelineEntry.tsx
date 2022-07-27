import {Button, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useState} from 'react';
import DatePicker from "@components/DatePicker/DatePicker";

import Box from "@mui/material/Box";
import {ROUTES} from "@statics";
import {Autocomplete} from "@material-ui/lab";


const TimelineEntry = () => {
    const [project, setProject] = useState([])
    const [categories, setCategories] = useState([]);
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [contributors, setContributors] = useState("");

    //TODO replace dummy projects
    const dummyProjects = [{
        name: "Correlation"
    },
        {
            name: "Nova"
        }, {
            name: "Perceptual Modes"
        }, {
            name: "IDEO"
        }, {
            name: "IT"
        }, {
            name: "Dormant"
        }]

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


    const handleSubmit = () => {
        if (project.length > 0 && categories.length > 0 && author && title && contributors) {
            window.location.pathname = ROUTES.TIMELINE;
        }
    }

    return (
        <div className="form-container">
            <Box sx={{display: 'inline-flex', flexDirection: 'column',}} textAlign='center' component="form"
                 onSubmit={handleSubmit}>
                <div className="text">
                    <Typography align="left" style={{fontWeight: 600}} variant="h5" paddingTop={5}>
                        Add Timeline Entry
                    </Typography>
                    <p>Fill in the blanks below to add a timeline entry</p>
                </div>

                <div>
                    <TextField value={author} onChange={(event) => {
                        setAuthor(event.target.value)
                    }} required sx={{width: 317}} id="standard-basic" label="Author" variant="standard"/>
                </div>
                <div>
                    <TextField value={title} onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                               required sx={{width: 317}} id="standard-basic" label="Title" variant="standard"/>
                </div>
                <div>
                    <TextField value={contributors} onChange={(event) => {
                        setContributors(event.target.value)
                    }}
                               required sx={{width: 317}} id="standard-basic" label="Contributors" variant="standard"/>
                </div>
                <Typography align="left" sx={{paddingTop: 3, textDecoration: 'underline'}}>
                    Select a Date
                </Typography>
                <DatePicker></DatePicker>
                <Typography align="left" sx={{paddingBottom: 3, paddingTop: 3}}>
                    Select a Project
                </Typography>

                <Autocomplete
                    multiple
                    style={{
                        width: 317,
                        paddingBottom: 30,
                    }}
                    filterSelectedOptions
                    getOptionSelected={(option, value) => option.name === value.name}
                    // @ts-ignore
                    onChange={(event, value) => setProject(value)}
                    ChipProps={{
                        style: {
                            backgroundColor: "#1E5487",
                            borderRadius: "5px",
                            color: "#fff",
                        }
                    }}
                    id="tags-standard"
                    options={project.length === 0 ? dummyProjects : []}
                    getOptionLabel={option => option.name}
                    renderInput={params => (
                        <TextField
                            required={project.length === 0}
                            {...params}
                            style={{
                                borderRadius: "10px",
                            }}
                            variant="outlined"
                            label="Projects"
                            id="custom-css-outlined-input"
                        />
                    )}
                />
                <Typography align="left" sx={{paddingBottom: 3}}>
                    Select Applicable Categories
                </Typography>

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
                <div>
                    <Button
                        onClick={handleSubmit}
                        variant="outlined" style={{
                        backgroundColor: "#1E5487",
                        color: "white",
                        width: 200,
                        marginTop: 50
                    }}>
                        Add Update
                    </Button>
                </div>
            </Box>
        </div>
    )
}
export default TimelineEntry
