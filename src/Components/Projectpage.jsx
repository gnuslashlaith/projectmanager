import { useParams as id } from "react-router-dom";
import '../assets/ProjectDashboard.css'
    


function Projectpage() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    
    const project = projects.find(p => p.id == id);


    if(!project) return <p>What project?</p>;

    return (
        <>
            <h1>{project.name}</h1>
        </>
    )

}

export default Projectpage;