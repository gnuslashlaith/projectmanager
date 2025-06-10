import React, {useState} from 'react'


function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState([]);


    function handleInput(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if(newTask.trim() != "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }


    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    return(
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
        
        );
}

export default ToDoList