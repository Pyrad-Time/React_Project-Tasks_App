// Component responsible for receiving the tasks list
// and rendiring each task on the screen
import TaskCard from "../TaskCard/TaskCard.jsx"

export default function TaskList (props) {
    return (
        <section className="taskList__container">
            <ul className="taskList__tasks">
                {props.tasks.map((task) => {
                    return (
                        <TaskCard key={task.id} task={task} onRemoveTask={props.onRemoveTask}/>
                    )
                })}
            </ul>
        </section>
    )
}