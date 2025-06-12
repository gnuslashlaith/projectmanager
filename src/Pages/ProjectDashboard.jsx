import React, {useState, useEffect} from 'react'
import '../assets/ProjectDashboard.css' 
import {Link} from "react-router-dom"
import {Sidebar} from '../Components/Sidebar'

function ProjectDashboard() {

    const [projects, setProjects] = useState(() => {
        const storedProjects= localStorage.getItem('projects');;
        return storedProjects ? JSON.parse(storedProjects) : [];
    });

    const [newProject, setNewProject] = useState([]);

    const [desc, setDesc] = useState(() => {
        const storedDesc = localStorage.getItem('desc');
        return storedDesc ? JSON.parse(storedDesc): [];
    });
    const [newDesc, setNewDesc] = useState([]);

    const [isVisible, setIsVisible] = useState(false);
    const toggleDiv = () => setIsVisible((prev) => !prev);


    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    useEffect(() => {
        localStorage.setItem('desc', JSON.stringify(desc));
    }, [desc]);



    function handleInputTitle(event) {
        setNewProject(event.target.value);
    }

    function handleInputDesc(event) {
        setNewDesc(event.target.value);
    }

    function addProject() {
        setProjects(p => [...p, newProject])
        setNewProject("");
    }

    function deleteProject(index) {
        const updatedProjects = projects.filter((_, i) => i!== index);
        setProjects(updatedProjects);
    }



    return ( 
        <>
            <div class="main">
                <h1>Project Dashboard</h1>

                <button onClick={toggleDiv}>
                    {isVisible ? "Hide Content": "Show Content"}
                </button>
                
                
                {isVisible && (
                    <div id="projectDetailContainer">
                        <input type="text" placeholder="enter project name." value={newProject} onChange={handleInputTitle}>
                    
                        </input>

                        <input type="text" placeholder="enter description." value={newDesc} onChange={handleInputDesc}></input>

                    <button class="add-project" onClick={addProject}>add project</button>
                </div>

                )}

                <div class="project-list">
                    {projects.map((project, index) =>
                        <div class="project-card" key={index}>
                            <a href="https://github.com" class="card-name">{project}</a>
                            <p class="sub">{desc}</p>
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