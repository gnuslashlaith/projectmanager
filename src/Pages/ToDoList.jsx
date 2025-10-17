import React, {useState, useEffect} from 'react'

import "../assets/ToDoList.css"
import Sidebar from '../Components/Sidebar';


function ToDoList() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [newTask, setNewTask] = useState([]);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    function handleInput(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }


    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function markAsDone() {
        
    }

    return(

        <>
            <div className="todo">
                <h1>To-Do List</h1>
                <h6>Get things done.</h6>

                <div>
                    <input type="text" placeholder='Enter a new task.' value={newTask} onChange={handleInput}>


                    </input>

                    <button class="add-button" onClick={addTask}>
                        Add 
                    </button>

                    
                </div>


                <ul>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">{task}</span>

                                <button class="delete-button" onClick={() => deleteTask(index)}>
                                    Remove 
                                </button>

                                <button class="markAsDone">

                                </button>


                        </li>

                    
                    
                    )} 
                </ul>
            
            </div>

            <Sidebar></Sidebar>

        </>
        
        );
}

export default ToDoList