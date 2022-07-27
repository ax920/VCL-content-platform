import {Button, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useState} from 'react';
import DatePicker from "@components/DatePicker/DatePicker";

import Box from "@mui/material/Box";
import {ROUTES} from "@statics";
import ProjectsMultiSelect from "@components/ProjectsMultiSelect/ProjectsMultiSelect";
import CategoriesMultiSelect from "@components/CategoriesMultiSelect/CategoriesMultiSelect";


const TimelineEntry = () => {

    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [contributors, setContributors] = useState("");
    const [date, setDate] = useState(new Date())
    const [project, setProject] = useState([])
    const [categories, setCategories] = useState([]);

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
                <DatePicker date={date} setDate={setDate}/>
                <Typography align="left" sx={{paddingBottom: 3, paddingTop: 3}}>
                    Select a Project
                </Typography>
                <ProjectsMultiSelect project={project} setProject={setProject}/>

                <Typography align="left" sx={{paddingBottom: 3}}>
                    Select Applicable Categories
                </Typography>
                <CategoriesMultiSelect categories={categories} setCategories={setCategories}/>
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
