import React, {useState, useEffect} from 'react'
import '../assets/ProjectDashboard.css'
import {Link} from "react-router-dom"
import {Sidebar} from '../Components/Sidebar'

function PomorodoTimer() {

    return(
        <>
            <div>
                <h1 class="pomoTitle">Pomorodo Timer</h1>

            </div>
                <input type="text"></input>
                <p> : </p>
                <input type="text"></input>

            <Sidebar/>
        
        
        </>

    );
}

export default PomorodoTimer;
