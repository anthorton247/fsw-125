const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bounties = [
    {fName: "Leroy", lName: "Jenkins", living: false, bounty: "$1", type: "Sith", __id: uuidv4()},
    {fName: "Obiwan", lName: "Kenobi", living: true, bounty: "$1000000", type: "Jedi", __id: uuidv4()},
    {fName: "Anakin", lName: "Skywalker", living: true, bounty: "$850000", type: "Jedi", __id: uuidv4()},
    {fName: "Count", lName: "Dooku", living: false, bounty: "$10000000", type: "Sith", __id: uuidv4()},
]

bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})

bountyRouter.delete("./:bountyID", (req, res) => {
    const bountyID = req.params.bountyID
    const bountySearch = bounties.findIndex(bounty => bounty.__id === bountyID)
    bounties.splice(bountySearch, 1)
    res.send("Bounty removed!")
})

bountyRouter.put("./:bountyID", (req, res) => {
    const bountyID = req.params.bountyID
    const bountySearch = bounties.findIndex(bounty => bounty.__id === bountyID)
    const bountyUpdate = Object.assign(bounites[bountySearch], req.body)
    res.send(bountyUpdate)
})

bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty.__id = uuidv4()
    bounties.push(newBounty)
    res.send("Thanks for adding to the bounty list!")
})

module.exports = bountyRouter