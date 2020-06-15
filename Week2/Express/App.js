const express = require("express")
const app = express()
const movies = [
    "Movies I like old and new",
    {name: "Iron Giant", score: 10},
    {name: "Her", score: 10},
    {name: "Uncut Gems", score: 10}
]
const videoGames = [
    "Games for the PS5 I am looking forward to.",
    {name: "Hozion Dawn 2", anticipation: 10},
    {name: "Ghostwire Tokyo", anticipation: 10},
    {name: "Spiderman: Miles Morales", anticipation: 10}
]
const coding = [
    "Coding I have and haven't learned yet",
    {name: "Angular", learned: false},
    {name: "Javascript", learned: true},
    {name: "HTML/CSS", learned: true},
    {name: "React", learned: false}
]

app.get('/movies', (req, res) => {
    res.send(movies)
})
app.get('/videogames', (req, res) => {
    res.send(videoGames)
})
app.get('/coding', (req, res) => {
    res.send(coding)
})
app.listen(3000, () => {
    console.log("App is listening on port 3000")
})