import React, {useState} from 'react'
import '../assets/ProjectDashboard.css' 
import {Link} from "react-router-dom"
import {Sidebar} from '../Components/Sidebar'

function ProjectDashboard() {



    return ( 
        <>
            <div class="main">
                <h1>Project Dashboard</h1>

                <div class="project-list">
                    <div class="project-card">
                        <a href="https://github.com" class="card-name">Project Demo</a>
                        <p class="sub">Project Manager - written in React</p>
                    </div>
                    <div class="project-card">
                        <a href="https://github.com" class="card-name">Project Demo 1</a>
                        <p class="sub">Project Manager - written in React</p>
                    </div>
                    <div class="project-card">
                        <a href="https://github.com" class="card-name">Project Demo 2</a>
                        <p>Project Manager - written in React</p>
                    </div>
                    <div class="project-card">
                        <a href="https://github.com" class="card-name">Project Demo 3</a>
                        <p class="sub">Project Manager - written in React</p>
                    </div>
                </div>

            
            </div>

            <Sidebar/>

            

        </>


    );
}

export default ProjectDashboard;