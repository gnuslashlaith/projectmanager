import React from "react";
import "../assets/ProjectTemplate.css"
import PriorityIcon from '../assets/images/PriorityIcon.png'
import PriorityAnimation from '../assets/images/PriorityAnimation.png'


export function PriorityIconOrange() {
    return(
        <>

        <img class="circle-orange" src={PriorityIcon} alt="image"></img>
        <img class="circle-orange-move" src={PriorityAnimation} alt="image"></img>
        </>
    );
}


export default PriorityIconOrange;