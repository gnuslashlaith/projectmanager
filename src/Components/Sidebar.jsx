import React, {useState} from 'react'
import '../assets/ProjectDashboard.css' 
import {Link} from "react-router-dom"

export function Sidebar() {

    return(
        <>     
        <div class="sidebar">
            <div class="tools">
                <h3>Toolbar</h3>
                <Link to="/"> Project Dashboard</Link>
                <Link to="/todolist">Calendar View</Link>
                <Link to="/todolist" href="https://github.com/gnuslashlaith">Daily Checklist</Link>
                <Link to="/todolist" href="https://github.com/gnuslashlaith">Pomorodo Timer</Link>

                <h3>Information</h3>
                <a href="https://github.com/gnuslashlaith/projectmanager">Source Code</a>
                <a href="https://github.com/gnuslashlaith">Github Profile</a>
            </div>
    </div>
        </>
    );

}

export default Sidebar;