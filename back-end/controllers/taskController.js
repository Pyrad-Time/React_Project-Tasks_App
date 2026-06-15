import { tasks } from "../data/tasks.js"

function getTasks(req, res) {
    return res.status(200).json(tasks)
}

function createTask(req, res) {
    const { title } = req.body

    if(!title || title.trim() === "") {
        return res.status(400).json({ message: "Task title is required" })
    }

    const newTask = {
        id: Date.now(),
        title: title.trim(),
        isCompleted: false
    }

    tasks.push(newTask)

    return res.status(201).json(newTask)
}

function deleteTask(req, res) {
    const { id } = req.params

    const taskIndex = tasks.findIndex((task) => {
        return task.id === Number(id)
    })

    if(taskIndex === -1) {
        return res.status(404).json({ message: "Task Not Found" })
    }

    const deletedTask = tasks.splice(taskIndex, 1)

    return res.status(200).json(deletedTask[0])
}


export { getTasks, createTask }