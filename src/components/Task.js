import '../styles/Task.css'

const Task = ({ title }) => {
    return(
        <div className="taskBox">
        <h2>{title}</h2>
        <button className='btn'>Test</button>
        </div>
    )
}

export default Task