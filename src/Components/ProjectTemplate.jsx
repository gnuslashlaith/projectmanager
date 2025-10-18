import Sidebar from "./Sidebar";
import ReminderText from "./ReminderText";
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ToDoList from './ToDoList';


export function ProjectTemplate({data}) {
    const {id} = useParams();
    const [project, setProject] = useState(null);





    useEffect(() => {
        const saved = localStorage.getItem(`goal-${id}`);
    })


    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        const found = storedProjects.find(p => p.id === id);
        setProject(found);
    }, [id]);


    if (!project) {
        return <div>Loading project...</div>;
    }





        return(


            <>
                <h1 style={{marginLeft: '25vh'}}>{project.name}</h1>
                <h4 style={{marginLeft: '25vh'}}>Start: {project.startDate}</h4>
                <h4 style={{marginLeft: '25vh'}}>End: {project.goalDate}</h4>
                <ReminderText projectId={id}/>
                <br></br>

                <ToDoList projectId={id} />

            



                <Sidebar/>
        
        </>    

        )

            

}

        export default ProjectTemplate;