const express = require("express")
const toDoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const toDos = [
    {
        name: "To Do Example",
        description: "description",
        imageUrl: "url",
        completed: false,
        __id: uuidv4()
    }
]

toDoRouter.get("/", (req, res) => {
    res.send(toDos)
})

toDoRouter.get("/:toDoID", (req, res) => {
    const toDoID = req.params.toDoID
    const toDoSearch = toDos.find(toDo => toDo.__id === toDoID)
    res.send(toDoSearch)
})

toDoRouter.delete("/:toDoID", (req, res) => {
    const toDoID = req.params.toDoID
    const toDoSearch = toDos.findIndex(toDo => toDo.__id === toDoID)
    toDos.splice(toDoSearch, 1)
    res.send("To Do removed!")
})

toDoRouter.put("/:toDoID", (req, res) => {
    const toDoID = req.params.toDoID
    const toDoSearch = toDos.findIndex(toDo => toDo.__id === toDoID)
    const toDoUpdate = Object.assign(toDos[toDoSearch], req.body)
    res.send(toDoUpdate)
})

toDoRouter.post("/", (req, res) => {
    const newToDo = req.body
    newToDo.__id = uuidv4()
    toDos.push(newToDo)
    res.send("Thanks for adding to the To Do list!")
})

module.exports = toDoRouter