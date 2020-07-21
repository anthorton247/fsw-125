const express = require("express")
const app = express()
app.use(express.json())

app.use('/animals', require("./Routes/animalRouter"))

app.listen(9000, () => {
    console.log("App is listening on port 9000")
})