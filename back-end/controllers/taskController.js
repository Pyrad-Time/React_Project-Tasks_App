import { pool } from "../database/connection.js"

async function getTasks(req, res) {
    try {
        const result = await pool.query(`
            SELECT
                id,
                title,
                is_completed AS "isCompleted",
                created_at AS "createdAt"
            FROM tasks
            ORDER BY created_at DESC
            `)
        return res.status(200).json(result.rows)
    } catch(error){
        return res.status(500).json({ message: "Error fetching tasks" })
    }
}

async function createTask(req, res) {
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

function toggleTask(req, res) {
    const { id } = req.params

    const task = tasks.find((task) => {
        return task.id === Number(id)
    })

    if(!task) {
        return res.status(400).json({ message: "Task not found" })
    }

    task.isCompleted = !task.isCompleted

    return res.status(200).json(task)
}

export { getTasks, createTask, deleteTask, toggleTask }