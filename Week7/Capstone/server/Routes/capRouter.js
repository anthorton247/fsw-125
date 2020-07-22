const express = require("express")
const capRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const workers = [
    {
        name: "John",
        job: "Miner",
        age: 23,
        likes: ["Football", "Steak", "Salsa dancing"],
        happy: true,
        __id: uuidv4()
    },
    {
        name: "Sarah",
        job: "Yoga Teacher",
        age: 35,
        likes: ["Anime", "Writing", "Pizza"],
        happy: true,
        __id: uuidv4()
    },
    {
        name: "Derik",
        job: "Streamer",
        age: 43,
        likes: ["Video Games", "Debating", "Civil Rights"],
        happy: false,
        __id: uuidv4()
    },
    {
        name: "Tam",
        job: "Student",
        age: 19,
        likes: ["Books", "Walking", "Martial Arts"],
        happy: true,
        __id: uuidv4()
    },
]

// Create a GET endpoint that returns all objects from the array and sends them to the client.
capRouter.get("/", (req, res) => {
    res.status(200).send(workers)
})
// Create a POST endpoint that adds a new object to the array.

capRouter.post("/", (req, res) => {
    const newWorker = req.body
    newWorker.__id = uuidv4()
    workers.push(newWorker)
    res.status(201).send("Your worker was added!")
})
// Create a PUT endpoint that can update an object in the array.
capRouter.put("/:workerID", (req, res) => {
    const workerID = req.params.workerID
    const workerSearch = workers.findIndex(worker => worker.__id === workerID)
    const workerUpdate = Object.assign(workers[workerSearch], req.body)
    res.status(201).send(workerUpdate)
})
// Create a DELETE endpoint that can delete an object in the array.
capRouter.delete("/:workerID", (req, res) => {
    const workerID = req.params.workerID
    const workerSearch = workers.findIndex(worker => worker.__id === workerID)
    workers.splice(workerSearch, 1)
    res.status(201).send("Worker information deleted.")
})
// Create a GET ONE endpoint that returns one object from the dataset.
capRouter.get("/search/name", (req, res, next) => {
    const name = req.query.name
    const specificWorker = workers.filter(worker => worker.name.toLowerCase() === name.toLowerCase())
    if(!specificWorker){
        const error = new Error(`Worker named ${name} not found`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(specificWorker)
})

capRouter.get("/:workerID", (req, res, next) => {
    const workerID = req.params.workerID
    const foundWorker = workers.find(worker => worker.__id === workerID)
    if(!foundWorker){
        const error = new Error("Worker not found")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundWorker)
})

// Create an endpoint that will query the dataset and return object(s) from the based on certain criteria

capRouter.get("/search/happy", (req, res) => {
    const happy = req.query.happy
    const specificWorker = workers.filter(worker => worker.happy === happy)
    if(happy !== true && happy !== false){
        const error = new Error("Must be true or false")
        res.status(500)
        return next(error)
    }
    res.status(200).send(specificWorker)
})

module.exports = capRouter