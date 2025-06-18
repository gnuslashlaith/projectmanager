import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import '../assets/ProjectTemplate.css';


export function ReminderText() {

        const [text, setText] = useState(null);

        const handleChange = (event) => {
            setText(event.target.value);
            localStorage.setItem("input", event.target.value);
        };

        useEffect(() => {
            setText(localStorage.getItem("input"));
        }, []);




    return(
    <>
          <div class="reminder-container" style={{marginLeft: "25vh"}}>
                <textarea value={text} onChange={handleChange} class="motiv" placeholder="What do you hope to get out of this project?" type="text" 
                style={{
                    width: "100vh", padding: "15px", fontSize: "18px", fontWeight: "bold", color: "#000", backgroundColor: "#fff", border: "4px solid #000", position: "relative", overflow: "hidden", borderRadius: "0", outline: "none", transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"
                    , boxShadow: "5px 5px 0 #000, 10px 10px 0 #FFAB00"
                }}></textarea>
            </div>
    
    
    
    </>);
}

export default ReminderText;
