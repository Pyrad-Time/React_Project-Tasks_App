// Component responsible for receiving the tasks list
// and rendering each task on the screen
import TaskCard from "../TaskCard/TaskCard.jsx"

export default function TaskList(props) {
    return (
        <section className="taskList__container">
            <ul className="taskList__tasks">
                {props.tasks.length === 0 ? (
                    <li className="taskList__empty">
                        Nenhuma tarefa encontrada
                    </li>
                ) : (
                    props.tasks.map((task) => {
                        return (
                            <TaskCard 
                                key={task.id}
                                task={task}
                                onRemoveTask={props.onRemoveTask}
                                onToggleTaskComplete={props.onToggleTaskComplete}
                            />
                        )
                    })
                )}
            </ul>
        </section>
    )
}