import React, {useState, useEffect} from 'react'

import "../assets/ToDoList.css"
import Sidebar from './Sidebar';
import { TextField } from '@mui/material';

function ToDoList({ projectId }) {
    const tasksKey = `tasks-${projectId}`;
    const doneKey = `doneTasks-${projectId}`;
  
    const [tasks, setTasks] = useState(() => {
      const storedTasks = localStorage.getItem(tasksKey);
      return storedTasks ? JSON.parse(storedTasks) : [];
    });
  
    const [newTask, setNewTask] = useState("");
    const [doneTasks, setDoneTasks] = useState(() => {
      const storedDone = localStorage.getItem(doneKey);
      return storedDone ? JSON.parse(storedDone) : [];
    });
  
    useEffect(() => {
      localStorage.setItem(tasksKey, JSON.stringify(tasks));
    }, [tasks, tasksKey]);
  
    useEffect(() => {
      localStorage.setItem(doneKey, JSON.stringify(doneTasks));
    }, [doneTasks, doneKey]);
  
    const handleInput = (event) => setNewTask(event.target.value);
  
    const addTask = () => {
      if (newTask.trim() !== "") {
        setTasks((t) => [...t, newTask]);
        setNewTask("");
      }
    };
  
    const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
      setDoneTasks(doneTasks.filter((i) => i !== index));
    };
  
    const markAsDone = (index) => {
      if (doneTasks.includes(index)) {
        setDoneTasks(doneTasks.filter((i) => i !== index));
      } else {
        setDoneTasks([...doneTasks, index]);
      }
    };

    return(

        <>
            <h1 class="todo-header">Project Tasks</h1>
            <div className="todo-full">

                <div class="todo">



                    <TextField 
                    className="text-enter" 
                    label="Enter a new task" 
                    variant="outlined" 
                    value={newTask} 
                    onChange={handleInput}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#ffffff' }, 
                            '&:hover fieldset': { borderColor: '#ffc233' }, 
                            '&.Mui-focused fieldset': { borderColor: '#ffc233' }, 
                        },

                        '& .MuiInputLabel-root': {
                            color: '#ffffff'
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                         color: '#ffb300', 
                        },
                        
                        '& .MuiInputBase-input': {
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 500,
                        }


                    }}></TextField>

                    <button class="add-button" onClick={addTask}>
                        Add 
                    </button>

                    
                </div>

                

                <div class="task-list">
                <ul>
                    {tasks.map((task, index) => 
                                <li
                                key={index}
                              >
                            <span 
                            className="text"
                            style={{
                                flexGrow: 1,
                                marginRight: "15px",
                                textDecoration: doneTasks.includes(index)
                                  ? "line-through"
                                  : "none",
                                color: doneTasks.includes(index) ? "#999" : "#333",
                              }}>{task}</span>

                                <button class="delete-button" onClick={() => deleteTask(index)}>
                                    Remove 
                                </button>

                                <button 
                                onClick={() => markAsDone(index)}class="mark-as-done">
                                {doneTasks.includes(index) ? "Undo" : "Done"}
                                </button>
                        </li>

                    
                    
                    )} 
                </ul>



                </div>
            
            </div>

            <Sidebar></Sidebar>

        </>
        
        );
}

export default ToDoList