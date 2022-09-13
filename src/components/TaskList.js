import Task from './Task'
import TaskForm from './TaskForm'
import '../styles/TaskList.css'

const tasks = [{id: 1, title: 'Consulta con otorrino'},
{id:2, title:'Comprar regalos de Navidad'},
{id:3, title:'Reservar mesa para aniversario'}]

const TaskList = () => {
    return(
        <div className='listContainer'>
            <TaskForm/>
            {tasks.map((task)=>(<Task key={task.id}title={task.title}/>))}
        </div>
    )
}

export default TaskList