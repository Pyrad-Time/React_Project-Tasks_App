// Component responsible for displaying a single task
// Triggering task actions such as complete or delete
import "./TaskCard.css"

export default function TaskCard(props) {
    return (
        <li className="taskCard__item">
            <input 
                className="taskCard__checkbox"
                type="checkbox" 
                id={`task-${props.task.id}`}  
                onChange={() => 
                    {props.onToggleTaskComplete(props.task.id)
                }}
            />

            <label className={props.task.isCompleted === true
                ? "taskCard__title taskCard__titleCompleted"
                : "taskCard__title"
            }
                    htmlFor={`task-${props.task.id}`}
            >
                {props.task.title}
            </label>

            <button 
                className="taskCard__button"
                type="button"
                onClick={() => 
                    props.onRemoveTask(props.task.id)
                }
            >Remove</button>
            
        </li>
    )
}