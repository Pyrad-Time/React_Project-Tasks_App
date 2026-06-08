import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import TaskForm from './components/TaskForm/TaskForm.jsx'
import TaskList from './components/TaskList/TaskList.jsx'
import TaskFilter from './components/TaskFilter/TaskFilter.jsx'
// Main component responsible for storgin the tasks state
// Coordinating the data flow between components

function App() {

  const [taskState, setTaskState] = useState([])
  const [activeFilter, setActiveFilter] = useState("all")

  function addTask(taskTitle) {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      isCompleted: false
    }

    setTaskState((currentTasks) => [...currentTasks, newTask])
  }

  function removeTask(taskId) {
    setTaskState((currentTasks) => {
      return currentTasks.filter((task) => {
        return task.id !== taskId
      })
    })
 }

  function toggleTaskComplete(taskId) {
    setTaskState((currentTasks) => {
      return currentTasks.map((task) => {
        if(task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        } else {
          return task
        }
      }) 
    })
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
    <>
      <Header onCompletedTasks={completedTasks} onTotalTasks={totalTasks}/>
      <TaskForm onAddTask={addTask}/>
      <TaskFilter 
        activeFilter={activeFilter}
        onChangeFilter={setActiveFilter}
      />
      <TaskList 
        tasks={filteredTasks}
        onRemoveTask={removeTask}
        onToggleTaskComplete={toggleTaskComplete}/>
    </>
  )
}

export default App
