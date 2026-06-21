import { pool } from "./database/connection.js"
import express from "express"
import cors from "cors"

import taskRoutes from "./routes/taskRoutes.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    return res.json({ message: "API is running" })
})

app.get("/db-test", async (req, res) => {
    const result = await pool.query("SELECT NOW()")

    return res.json(result.rows[0])
})

app.use("/tasks", taskRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})