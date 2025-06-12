import React, {useState} from 'react'
import './ProjectDashboard.css' 

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

            <div class="sidebar">
                    <div class="tools">
                        <h3>Toolbar</h3>
                        <a href="https://github.com"> Project Dashboard</a>
                        
                        <a href="https://github.com/gnuslashlaith">Calendar View</a>
                        <a href="https://github.com/gnuslashlaith">Daily Checklist</a>
                        <a href="https://github.com/gnuslashlaith">Pomorodo Timer</a>

                        <h3>Information</h3>
                        <a href="https://github.com/gnuslashlaith/projectmanager">Source Code</a>
                        <a href="https://github.com/gnuslashlaith">Github Profile</a>
                    </div>

                </div>

        </>


    );
}

export default ProjectDashboard;