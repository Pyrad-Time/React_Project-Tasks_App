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
    try {
        const { title } = req.body

        if(!title || title.trim() === "") {
            return res.status(400).json({ message: "Task title is required" })
        }

        const result = await pool.query(`
            INSERT INTO tasks (title)
            VALUES ($1)
            RETURNING
                id,
                title,
                is_completed AS "isCompleted",
                created_at AS "createdAt"
                
            `,
            [title.trim()]
        )
        return res.status(201).json(result.rows[0])
    } catch(error) {
        return res.status(500).json({ message: "Error creating task" })
    }
}

async function deleteTask(req, res) {
    try {
        const { id } = req.params

        const result = await pool.query(`
            DELETE FROM tasks
            WHERE id = $1
            RETURNING
                id,
                title,
                is_completed AS "isCompleted",
                created_at AS "createdAt"
            `, [id])
        
            if(result.rows.length === 0) {
                return res.status(404).json({ message: "Task not found" })
            }

        return res.status(200).json(result.rows[0])
    } catch(error) {
        return res.status(500).json({ messsage: "Error deleting task" })
    }
}

async function toggleTask(req, res) {
    try {
        const { id } = req.params

        const result = await pool.query(`
            UPDATE tasks
            SET is_completed = NOT is_completed
            WHERE id = $1
            RETURNING 
                id,
                title,
                is_completed AS "isCompleted",
                created_at AS "createdAt"
            `, [id])

        if(result.rows.length === 0) {
            return res.status(404).json({ message: "Task not found" })
        }
    } catch(error) {
        return res.status(500).json({ message: "Error toggling task" })
    }
}

export { getTasks, createTask, deleteTask, toggleTask }