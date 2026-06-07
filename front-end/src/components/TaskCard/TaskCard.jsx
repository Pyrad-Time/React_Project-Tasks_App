// Component responsible for displaying a single task
// Triggering task actions such as complete or delete

export default function TaskCard(props) {
    return (
        <li className="taskCard__item">
            <span className="taskCard__title">
                {props.task.title}
            </span>
            <button onClick={() => props.onRemoveTask(props.task.id)}>Remove</button>
        </li>
    )
}