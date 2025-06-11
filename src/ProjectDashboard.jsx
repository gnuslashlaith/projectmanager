import React, {useState} from 'react'
import './ProjectDashboard.css' 

function Login() {



    return ( 
        <div class="sidebar">

            <div class="tools">
                <h3>Toolbar</h3>
                <img src="logo.svg"></img>
                <a href="https://github.com"> Project Dashboard</a>
                <br></br>
                <img src="logo.svg"></img>
                <a href="https://github.com/gnuslashlaith">Calendar View</a>
                <br></br>
                <img src="logo.svg"></img>
                <a href="https://github.com/gnuslashlaith">Daily Checklist</a>
            </div>

            <div class="projectToolbar">
                <h4>Projects</h4>
                <a href="https://github.com/gnuslashlaith">Project 1</a>
                <br></br>
                <a href="https://github.com/gnuslashlaith">Project 2</a>
                <br></br>
                <a href="https://github.com"> Project 3</a>
                <br></br>
                <a href="https://github.com"> Project 4</a>
                <br></br>
                <a href="https://github.com"> Project 5</a>
            </div>
        </div>


    );
}

export default Login;