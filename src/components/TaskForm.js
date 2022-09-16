import '../styles/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'


const TaskForm = ({ formSubmit }) => {

    const [input, setInput] = useState()

const handleChange = (e) => {
    setInput(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault() //prevenimos que se recargue al enviar el form
    //agregamos la nueva tarea
    const newTask = {
        id: uuidv4(),
        title: input,
        completed: false
    }
    formSubmit(newTask)
}

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Write your task!"
            name="title"
            onChange={handleChange}
            />
            <button>Add Task</button>
        </form>
    )
}

export default TaskForm