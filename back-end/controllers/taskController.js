function getTasks(req, res) {
    const tasks = [
        {
            id: 1,
            title: "Title test",
            isCompleted: true
        }
    ]

    return res.status(200).json(tasks)
}

export { getTasks }