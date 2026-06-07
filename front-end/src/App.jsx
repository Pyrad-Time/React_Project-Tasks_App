import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import TaskForm from './components/TaskForm/TaskForm.jsx'
import TaskList from './components/TaskList/TaskList.jsx'
// Main component responsible for storgin the tasks state
// Coordinating the data flow between components

function App() {

  const [taskState, setTaskState] = useState([])

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

  return (
    <>
      <Header/>
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={taskState} onRemoveTask={removeTask}/>
    </>
  )
}

export default App
