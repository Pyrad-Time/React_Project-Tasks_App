import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import TaskForm from './components/TaskForm/TaskForm.jsx'
import TaskList from './components/TaskList/TaskList.jsx'
import TaskFilter from './components/TaskFilter/TaskFilter.jsx'
import { createTask, deleteTask, getTasks, toggleTask } from './services/taskService.js'
// Main component responsible for storgin the tasks state
// Coordinating the data flow between components

function App() {

  const [taskState, setTaskState] = useState([])
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    async function loadTasks() {
      try {
        const tasksFromApi = await getTasks()
        setTaskState(tasksFromApi)
      } catch(error) {
        console.log(error)
      }
    }

    loadTasks()
  }, [])

  async function addTask(taskTitle) {
    try {
      const newTask = await createTask(taskTitle)

      setTaskState((currentTasks) => {
        return[newTask, ...currentTasks]
      })
    } catch(error) {
      console.log(error)
    }
  }

  async function removeTask(taskId) {
    try {
      await deleteTask(taskId)

      setTaskState((currentTasks) => {
        return currentTasks.filter((task) => {
          return task.id !== taskId
        })
      })
    } catch(error){
      console.log(error)
    }
 }

  async function toggleTaskComplete(taskId) {
    try {
      const updateTask = await toggleTask(taskId) 
      console.log(updateTask)

      setTaskState((currentTasks) => {
        return currentTasks.map((task) => {
          if(task.id === taskId) {
            return updateTask
          }
          return task
        })
      })
    } catch(error){
        console.log(error)
    }
  }

  const filteredTasks = taskState.filter((task) => {
    if(activeFilter === "completed") {
      return task.isCompleted === true
    }

    if(activeFilter === "pending") {
      return task.isCompleted === false
    }

    return true
  })

  const completedTasks = taskState.filter((task) => {
    return task.isCompleted === true
  }).length
  const totalTasks = taskState.length

  return (
      <main className="app__container">
        <Header 
          onCompletedTasks={completedTasks}
          onTotalTasks={totalTasks}
        />
        <TaskForm 
          onAddTask={addTask}
        />
        <TaskFilter 
          activeFilter={activeFilter}
          onChangeFilter={setActiveFilter}
        />
        <TaskList 
          tasks={filteredTasks}
          onRemoveTask={removeTask}
          onToggleTaskComplete={toggleTaskComplete}
        />
      </main>
  )
}

export default App
