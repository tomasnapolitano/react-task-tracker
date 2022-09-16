import Task from './Task'
import TaskForm from './TaskForm'
import '../styles/TaskList.css'
import { useState } from 'react'

const tasks = [{id: 1, title: 'Consulta con otorrino'},
{id:2, title:'Comprar regalos de Navidad'},
{id:3, title:'Reservar mesa para aniversario'}]

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        if(task.title.trim()){
            task.title = task.title.trim();
            const updatedTasks =[task, ...tasks];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className='listContainer'>
            <TaskForm formSubmit={addTask}/>
            {tasks.map((task)=>(<Task key={task.id}title={task.title}/>))}
        </div>
    )
}

export default TaskList