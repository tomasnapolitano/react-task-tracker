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

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id != id);
        setTasks(updatedTasks);
    }

    const completedTask = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id == id) {
                task.complete = !task.complete;
            }
            return task;
        })
        setTasks = updatedTasks;
    }

    return(
        <div className='listContainer'>
            <TaskForm formSubmit={addTask}/>
            {tasks.map((task)=>(<Task deleteTask={deleteTask} key={task.id}title={task.title} complete={task.complete}/>))}
        </div>
    )
}

export default TaskList