import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import '../assets/ProjectTemplate.css';


export function ReminderText() {

    const [inputValue, setInputValue] = useState('');


    return(
    <>
          <div class="reminder-container" style={{marginLeft: "25vh"}}>
                <input class="motiv" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="What do you hope to get out of this project?" type="text" 
                style={{
                    width: "100vh", padding: "15px", fontSize: "18px", fontWeight: "bold", color: "#000", backgroundColor: "#fff", border: "4px solid #000", position: "relative", overflow: "hidden", borderRadius: "0", outline: "none", transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)"
                    , boxShadow: "5px 5px 0 #000, 10px 10px 0 #FFAB00"
                }}></input>
            </div>
    
    
    
    </>);
}

export default ReminderText;
