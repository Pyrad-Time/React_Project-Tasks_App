// Component responsible for displaying a single task
// Triggering task actions such as complete or delete
import "./TaskCard.css"

export default function TaskCard(props) {
    return (
        <li className="taskCard__item">
            <span className={props.task.isCompleted === true
                ? "taskCard__title taskCard__titleCompleted"
                : "taskCard__title"
            }>
                {props.task.title}
            </span>
            <button onClick={() => props.onRemoveTask(props.task.id)}>Remove</button>
            <input type="checkbox" id={props.task.id}  
                onChange={() => {props.onToggleTaskComplete(props.task.id)}}
                ></input>
            <label htmlFor={props.task.id}></label>
        </li>
    )
}