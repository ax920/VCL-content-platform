import React, { useEffect, useState } from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { TEXT } from '@statics'
import { callGetProjectByNameAPI } from '@services/adapters/projectAdapter';

interface ProjectProps {
    project : Project,
}

const ProjectDefault: React.FC<ProjectProps> = (props) => {
    const [response, setResponse] = useState<any>({});
    const [error, setError] = useState(false);
   
    useEffect(() => {
        // make api call and try to fetch from backend
        const fetchProject = async () => {
            const [data, err] = await callGetProjectByNameAPI(props.project.name);
            setResponse(data);
            setError(err);
        }
        fetchProject();
    }, [])

    console.log(response);

    return (
        <div>
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.PROJECT_DESCRIPTION} /> 
            <h1>{props.project.name}</h1>
            <p>{response.data.description}</p>
        </div>
    )
};

export default ProjectDefault;
