// Component responsible for controlling the task input
// And sending new task data to the App component
import "./TaskForm.css";
import { useState } from "react";



export default function TaskForm(props) {    
    const [taskTitle, setTaskTitle] = useState("")

    function handleSubmit (event) {
        event.preventDefault()
        
        const trimmedTaskTitle = taskTitle.trim()

        if(trimmedTaskTitle === "") {
            alert("Digite um valor válido")
            return
        }
        props.onAddTask(trimmedTaskTitle)

        setTaskTitle("")
    }

    return (
        <section className="taskForm__container">
            <form 
                className="taskForm__form"
                action=""
                onSubmit={handleSubmit}
                >

                <input 
                    className="taskForm__input"
                    type="text"  
                    value={taskTitle}
                    placeholder="Digite uma nova tarefa..."
                    onChange={(e) => {
                        setTaskTitle(e.target.value)
                    }}    
                />

                <button 
                    className="taskForm__button"
                    type="submit"
                >Adicionar</button>
            </form>
        </section>
    )
}