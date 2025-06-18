import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import '../assets/ProjectTemplate.css'
import ReminderText from "./ReminderText";


/* TODO:
* 
* Create UI for Project Pages
* Add TO-DO list function (completed, delete, move)
* Finish Pomorodo Timer
* Refine UI for Daily Checklist
*/
export function ProjectTemplate({data}) {

    const {id} = useParams();
    const [project, setProject] = useState(null);


    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        const found = storedProjects.find(p => p.id === id);
        setProject(found);
    }, [id]);



    if (!project) return <p style={{color: "white"}}>What project?</p>


    return(
        <>
            <h1 class="project-title-h1">{project.name}</h1>
            <div class="project-information">
                <h4 style={{color: "white"}}>Started: {project.startDate}</h4>
                <h4 style={{color: "white"}}>Target Completion: {project.goalDate}</h4>
            </div>
            <ReminderText/>

            <Sidebar/>


        
        </>
    );
}

export default ProjectTemplate;