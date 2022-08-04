import React from 'react'
import "./ProjectOverview.css";
import ProjectOverviewCard from "@components/ProjectOverviewCard/ProjectOverviewCard";

const ProjectOverview = () => {
    // const projects = useAppSelector(selectProjects);

    {/* TODO: refactor to fetch data from backend, currently hard-coded */}
    const projects = [{ // dummy projects
        name: "Correlation"
    },
        {
            name: "NOVA"
        }, {
            name: "Perceptual Modes"
        }, {
            name: "IDEO"
        }, {
            name: "IT"
        }, {
            name: "Dormant"
        },
        {
            name: "Image Transitions"
        }]

    return (
        <div className='project-overview-container'>
            <div>
                <h2 className='project-overview-title'>All Projects</h2>
                <hr/>
            </div >
            <div className='button-container'>
            {projects.map((project) => <ProjectOverviewCard project={project} ></ProjectOverviewCard>)}
            </div>
        </div>
    )
}

export default ProjectOverview;

