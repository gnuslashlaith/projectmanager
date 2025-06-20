import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import '../assets/ProjectTemplate.css'
import ReminderText from "./ReminderText";
import PriorityIconOrange from "./PriorityIconOrange";
import PriorityIconBlue from "./PriorityIconBlue";


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


    function completedTask() {

    }

    function undoComplete() {
        
    }



    if (!project) return <p style={{color: "white"}}>What project?</p>


    return(
        <>
            <h1 class="project-title-h1">{project.name}</h1>
            <p class="desc">Outline your progress here. Blue icons are larger milestones. Beginning, middle, end. The rest are weekly goals you can hit for yourself.</p>
            <div class="project-information">
                <h4 style={{color: "white"}}>Started: {project.startDate}</h4>
                <h4 style={{color: "white"}}>Target Completion: {project.goalDate}</h4>
            </div>
            <ReminderText/>
            <br></br>
            
            <div class="task-priority-orange">

                <PriorityIconOrange></PriorityIconOrange>
                <input className="task-input-priority" type="text" placeholder="What are you starting with?"></input>
                <button class="mark-complete" onClick={completedTask}>Mark Complete</button>
                <button class="undo-complete" onClick={undoComplete}>Undo</button>

            </div>

            <div class="task-priority-blue">
               <PriorityIconBlue></PriorityIconBlue> 
               <input className="task-input-priority task-blue" type="text" placeholder="What step are you going to take before entering the next milestone?"></input>
               <input type="checkbox"></input>

            </div>

            <Sidebar/>


        
        </>
    );
}

export default ProjectTemplate;