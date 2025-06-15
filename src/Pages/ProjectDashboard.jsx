import React, {useState, useEffect} from 'react'
import '../assets/ProjectDashboard.css' 
import {Link} from "react-router-dom"
import {Sidebar} from '../Components/Sidebar'

function ProjectDashboard() {

    const [projects, setProjects] = useState(() => {
        const storedProjects= localStorage.getItem('projects');;
        return storedProjects ? JSON.parse(storedProjects) : [];
    });

    const [newProject, setNewProject] = useState({
        name: '',
        description: '',
        startDate: '',
        goalDate: '',
    });

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    const [isVisible, setIsVisible] = useState(false);
    const toggleDiv = () => setIsVisible((prev) => !prev);


    function deleteProject(index) {
        const updatedProjects = projects.filter((_, i) => i!== index);
        setProjects(updatedProjects);
    }

    function addProject() {
        if(!newProject.name) return;
        const projectWithId = {
            ...newProject, 
            id: Date.now().toString(),
        };
        setProjects(p => [...p, projectWithId])
        setNewProject({name: '', description: '', startDate: '', endDate: ''});
    }


    return ( 
        <>
            <div class="main">
                <h1>Project Dashboard</h1>

                <button class="toggle" onClick={toggleDiv}>
                    {isVisible ? "^": "+"}
                </button>

                
                
                {isVisible && (
                    <div id="projectDetailContainer">
                        <br></br>
                        <br></br>
                        <input className="project-details" type="text" placeholder="enter project name." value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}></input>
                        <span className="project-highlight"></span>

                        <input className="project-details" type="text" placeholder="enter project description." value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}></input>
                        <span className="project-highlight"></span>

                        <input className="dateStart" type="date" placeholder='Enter start date' value={newProject.startDate} onChange={(e) => setNewProject({...newProject, startDate: e.target.value})}></input>
                        <p class="label">To</p>
                        <input className="dateEnd" type="date" placeholder='Enter end date' value={newProject.goalDate} onChange={(e) => setNewProject({...newProject, goalDate: e.target.value})}></input>

                        <button class="add-project" onClick={addProject}>add project</button>

                    
                    </div>



                )}

                <div class="project-list"> 
                    {projects.map((project, index) =>
                        <div class="project-card" key={project.id || index}>
                            <Link to={`/project/${project.id}`} class="card-name">{project.name}</Link>
                            <p class="sub">{project.description}</p>
                            <p class="sub">Start: {project.startDate} Goal: {project.goalDate}</p>

                            <button class="delete-project" onClick={() => deleteProject(index)}>-</button>
                        </div>
                    )}
                </div>

            
            </div>

            <Sidebar/>

            

        </>


    );
}

export default ProjectDashboard;