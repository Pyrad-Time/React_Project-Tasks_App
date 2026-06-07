// Component responsible for changing which tasks are displayed
// all, pending or completed.
import "./TaskFilter.css"

export default function TaskFilter(props) {
    return (
        <section className="taskFilter__container">
            <button 
                onClick={() => {
                    props.onChangeFilter("all")
                }}
                type="button"
                className={
                    props.activeFilter === "all"
                        ? "taskFilter__button taskFilter__buttonActive" 
                        : "taskFilter__button"}
                >Todas</button>

            <button 
                onClick={() => {
                    props.onChangeFilter("pending")
                }}
                type="button"
                className={
                    props.activeFilter === "pending"
                    ? "taskFilter__button taskFilter__buttonActive"
                    : "taskFilter__button"
                }
            >Pendentes</button>

            <button 
                onClick={() => {
                    props.onChangeFilter("completed")
                }}
                type="button"
                className={
                    props.activeFilter === "completed"
                    ? "taskFilter__button taskFilter__buttonActive"
                    : "taskFilter__button"
                }
            >Concluídas</button>
        </section>
    )
}