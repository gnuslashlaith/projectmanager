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
        PriorityOrangeOne: {value: '', readOnly: true},
        PriorityBlueOne: {value: '', readOnly: true},
        PriorityBlueTwo: {value: '', readOnly: true},
        PriorityBlueThree: {value: '', readOnly: true},
        PriorityOrangeTwo: {value: '', readOnly: true},
        PriorityBlueFour: {value: '', readOnly: true},
        PriorityBlueFive: {value: '', readOnly: true},
        PriorityBlueSix: {value: '', readOnly: true},
        PriorityOrangeThree: {value: '', readOnly: true},
    });



    const handleTextChange = (event) => {
        const {name, value} = event.target;
        setGoalText(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                value: value
            }
        }));

    };

    const setReadOnly = (name, isReadOnly) => {
        setGoalText(prevState => ({
            ...prevState,
            [name]: {
                ...prevState[name],
                readOnly: isReadOnly
            }
        }));
    };

    useEffect(() => {
        const saved = localStorage.getItem(`goal-${id}`);
        if(saved) {
                setGoalText(JSON.parse(saved));
        }
    }, [id]);




    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        const found = storedProjects.find(p => p.id === id);
        setProject(found);

        if(project) {
            localStorage.setItem(`goal-${id}`, JSON.stringify(goalText));
        }
    }, [goalText, id, project]);


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

            <br></br>
            <div class="task-priority-orange">
                <textarea placeholder="What are you starting with?"  name="PriorityOrangeOne" value={goalText.PriorityOrangeOne.value}  readOnly={goalText.PriorityOrangeOne.readOnly} onChange={handleTextChange}/>
                <button  onClick={() => setReadOnly("PriorityOrangeOne", true)}>Save</button>
                <button onClick={() => setReadOnly("PriorityOrangeOne", false)}>Edit</button>
                
            </div>
            <br></br>
            <div class="task-priority-blue">
                <textarea placeholder="What's the next step to milestone 2?" name="PriorityBlueOne" value={goalText.PriorityBlueOne.value} readOnly={goalText.PriorityBlueOne.readOnly} onChange={handleTextChange}/>
                <button placeholder="What's the next step to milestone 2?"onClick={() => setReadOnly("PriorityBlueOne", true)}>Save</button>
                <button onClick={() => setReadOnly("PriorityBlueOne", false)}>Edit</button>
                <br></br>
                <textarea placeholder="What's the next step to milestone 2?"name="PriorityBlueTwo" value={goalText.PriorityBlueTwo.value} readOnly={goalText.PriorityBlueTwo.readOnly} onChange={handleTextChange}/>
                <button onClick={() => setReadOnly("PriorityBlueTwo", true)}>Save</button>
                <button onClick={() => setReadOnly("PriorityBlueTwo", false)}>Edit</button>
                <br></br>
                <textarea placeholder="What's the next step to milestone 2?"name="PriorityBlueThree" value={goalText.PriorityBlueThree.value} readOnly={goalText.PriorityBlueThree.readOnly} onChange={handleTextChange}/>
                <button onClick={() => setReadOnly("PriorityBlueThree", true)}>Save</button>
                <button onClick={() => setReadOnly("PriorityBlueThree", false)}>Edit</button>
            </div>

            <br></br>

            <div class="task-priority-orange">
                <textarea placeholder="What is your halfway point?"name="PriorityOrangeTwo" value={goalText.PriorityOrangeTwo.value} readOnly={goalText.PriorityOrangeTwo.readOnly} onChange={handleTextChange}/>
                <button onClick={() => setReadOnly("PriorityOrangeTwo", true)}>Save</button>
                <button onClick={() => setReadOnly("PriorityOrangeTwo", false)}>Edit</button>
            </div>
            <br></br>

            <div class="task-priority-blue">
                <textarea placeholder="final stretch! next steps to finish line." name="PriorityBlueFour" value={goalText.PriorityBlueFour.value} readOnly={goalText.PriorityBlueFour.readOnly} onChange={handleTextChange}/>
                <button onClick={() => setReadOnly("PriorityBlueFour", true)}>Save</button>
                <button onClick={() => setReadOnly("PriorityBlueFour", false)}>Edit</button>
                <br></br>
                <textarea placeholder="final stretch! next steps to finish line."name="PriorityBlueFive" value={goalText.PriorityBlueFive.value} readOnly={goalText.PriorityBlueFive.readOnly} onChange={handleTextChange}/>
                <button onClick={() => setReadOnly("PriorityBlueFive", true)}>Save</button>
                <button onClick={() => setReadOnly("PriorityBlueFive", false)}>Edit</button>
                <br></br>
                <textarea placeholder="final stretch! next steps to finish line."name="PriorityBlueSix" value={goalText.PriorityBlueSix.value} readOnly={goalText.PriorityBlueSix.readOnly}  onChange={handleTextChange}/>
                <button onClick={() => setReadOnly("PriorityBlueSix", true)}>Save</button>
                <button onClick={() => setReadOnly("PriorityBlueSix", false)}>Edit</button>
            </div>
            <br></br>

            <div class="task-priority-orange">
                <textarea placeholder="You made it! how do you know your project is done?"name="PriorityOrangeThree" value={goalText.PriorityOrangeThree.value} readOnly={goalText.PriorityOrangeThree.readOnly} onChange={handleTextChange}/>
                <button onClick={() => setReadOnly("PriorityOrangeThree", true)}>Save</button>
                <button onClick={() => setReadOnly("PriorityOrangeThree", false)}>Edit</button>
            </div>
            

            <Sidebar/>


        
        </>
    );
}

export default ProjectTemplate;