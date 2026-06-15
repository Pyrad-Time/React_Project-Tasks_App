import express from "express"
import cors from "cors"

import taskRoutes from "./routes/taskRoutes.js"

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    return res.json({ message: "API is running" })
})

app.use("/tasks", taskRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})