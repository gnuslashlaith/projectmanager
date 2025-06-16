import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export function ProjectTemplate({data}) {

    const id = useParams();
    const [project, setProject] = useState(null);


    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];


        const found = storedProjects.find(p => p.id === id);

        setProject(found);
    })



    if (!project) return <p style={{color: "white"}}>What project?</p>


    return(
        <>
            <div>
                <h1>{project.name}</h1>
            </div>
        
        </>
    );
}

export default ProjectTemplate;