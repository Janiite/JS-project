import React from 'react'
import {useState} from 'react'
import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import AddTask from './Components/AddTask'
import Axios from "axios";

function App() {

  const[showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks] = useState([])
     

    //Add Task 
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000)+1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }
    //Delete Task
      const deleteTask = (id) =>{
        console.log(id);
        Axios.post("http://localhost:3001/delete", {
           id:id,
       }).then(() => {
            console.log("Done")
           });
      }
    
      //Toggle Remainder
      const toggleReminder = (id) => {
          setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
        
      }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length> 0 ? <Tasks tasks={tasks} setTasks={setTasks} onDelete = {deleteTask} onToggle= {toggleReminder}  /> : 'No Tasks to Show'}
      
    </div>
  );
}

export default App;
