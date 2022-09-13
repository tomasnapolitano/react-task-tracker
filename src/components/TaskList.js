import Task from './Task'

const tasks = [{id: 1, title: 'Consulta con otorrino'},
{id:2, title:'Comprar regalos de Navidad'},
{id:3, title:'Reservar mesa para aniversario'}]

const TaskList = () => {
    return(
        <>
            {tasks.map((task)=>(<Task key={task.id}title={task.title}/>))}
        </>
    )
}

export default TaskList