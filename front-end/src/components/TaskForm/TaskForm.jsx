// Component responsible for controlling the task input
// And sending new task data to the App component
import "./TaskForm.css";
import { useState } from "react";



export default function TaskForm(props) {    
    const [taskTitle, setTaskTitle] = useState("")

    function handleSubmit (event) {
    event.preventDefault()
    
    if(taskTitle === "") {
        alert("Digite um valor válido")
        return
    }
    props.onAddTask(taskTitle)

    setTaskTitle("")
}

    return (
        <section className="taskForm__container">
            <form 
                className="taskForm__form"
                action=""
                onSubmit={(e) => {
                    handleSubmit(e)
                }}
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