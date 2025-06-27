import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import '../assets/ProjectTemplate.css'
import ReminderText from "./ReminderText";


/* TODO:
* Create UI for Project Pages
* Add TO-DO list function (completed, delete, move)
* Finish Pomorodo Timer
* Refine UI for Daily Checklist
*/
export function ProjectTemplate({data}) {

    // export data from project dashboard
    const {id} = useParams();
    const [project, setProject] = useState(null);

    const [goalText, setGoalText] = useState({
        PriorityOrangeOne: '',
        PriorityBlueOne: '',
        PriorityBlueTwo: '',
        PriorityBlueThree: '',
        PriorityOrangeTwo: '',
        PriorityBlueFour: '',
        PriorityBlueFive: '',
        PriorityBlueSix: '',
        PriorityOrangeThree: '',
    });



    const handleTextChange = (event) => {
        const {name, value} = event.target;
        setGoalText(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    useEffect(() => {
        const saved = localStorage.getItem('goal');
        if(saved) {
            try {

                setGoalText(JSON.parse(saved));
            }
            catch(e) {
                console.error("error parsing saved goal: ", e);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('goal', JSON.stringify(goalText));
    }, [goalText]);



    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        const found = storedProjects.find(p => p.id === id);
        setProject(found);
    }, [id]);


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
                <textarea name="PriorityOrangeOne" value={goalText.PriorityOrangeOne} onChange={handleTextChange}/>
                
            </div>

            <div class="task-priority-blue">
                <textarea name="PriorityBlueOne" value={goalText.PriorityBlueOne} onChange={handleTextChange}/>
                <textarea name="PriorityBlueTwo" value={goalText.PriorityBlueTwo} onChange={handleTextChange}/>
                <textarea name="PriorityBlueThree" value={goalText.PriorityBlueThree} onChange={handleTextChange}/>
            </div>

            <div class="task-priority-orange">
                <textarea name="PriorityOrangeTwo" value={goalText.PriorityOrangeTwo} onChange={handleTextChange}/>
            </div>

            <div class="task-priority-blue">
                <textarea name="PriorityBlueFour" value={goalText.PriorityBlueFour} onChange={handleTextChange}/>
                <textarea name="PriorityBlueFive" value={goalText.PriorityBlueFive} onChange={handleTextChange}/>
                <textarea name="PriorityBlueSix" value={goalText.PriorityBlueSix}  onChange={handleTextChange}/>
            </div>

            <div class="task-priority-orange">
                <textarea name="PriorityOrangeThree" value={goalText.PriorityOrangeThree} onChange={handleTextChange}/>
            </div>
            

            <Sidebar/>


        
        </>
    );
}

export default ProjectTemplate;