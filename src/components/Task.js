import '../styles/Task.css'
import {AiOutlineCloseCircle} from 'react-icons/ai'

const Task = ({ id, title, completed, deleteTask }) => {
    return(
        <div className="taskBox" /*className= completed ? 'task completed' : 'task ' */>
        <h2>{title}</h2>
        <p>{completed}</p>
        <div
        onClick={() => deleteTask(id)}>
            <AiOutlineCloseCircle className="icon-delete"/>
        </div>
        </div>
    )
}

export default Task