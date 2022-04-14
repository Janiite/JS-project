import React from 'react'
import Task from './Task'
import Axios from "axios";


const Tasks = ({tasks, setTasks, onDelete, onToggle}) => {
    Axios.get("http://localhost:3001/todos", {}).then((response) => {
        setTasks(response.data);
      });

  return (
        <>
            {
                tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                ))
                    
            }
        </>
    )
}



export default Tasks