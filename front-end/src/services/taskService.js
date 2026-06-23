const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"
const API_URL = `${API_BASE_URL}/tasks`

async function getTasks() {
    const response = await fetch(API_URL)

    if(!response.ok) {
        throw new Error("Erro ao buscar tarefas")
    }

    return response.json()
}

async function createTask(title) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
    })

    if(!response.ok) {
        throw new Error("Erro ao criar tarefa")
    }

    return response.json()
}

async function deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })

    if(!response.ok) {
        throw new Error("Erro ao deletar tarefa")
    }

    return response.json()
}

async function toggleTask(id){
    const response = await fetch(`${API_URL}/${id}/toggle`, {
        method: "PATCH"
    })

    if(!response.ok) {
        throw new Error("Erro ao atualizar checkbox")
    }

    return response.json()
}

export { getTasks, createTask, deleteTask, toggleTask }