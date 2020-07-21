const express = require("express")
const animalRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const animal =
    [
        {
            type: "wolf",
            __id: uuidv4()
        }, 
        {
            type: "monkey",
            __id: uuidv4()
        }, 
        {
            type: "tiger",
            __id: uuidv4()    
        }, 
        {
            type: "lemur",
            __id: uuidv4()
        }, 
        {
            type: "tuna",
            __id: uuidv4()
        }] 

animalRouter.get("/", (req, res) => {
    const type = req.query.type
    const filterAnimals = animal.filter(animal => animal.type === type)
    if(type) {
        return res.send(filterAnimals)
    } else {
        res.send(animal)
    }
    
})


module.exports = animalRouter