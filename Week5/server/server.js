const express = require("express")
const app = express()
app.use(express.json())

app.use('/bounties', require("./Routes/bountyRouter"))

app.listen(9000, () => {
    console.log("App is listening on port 9000")
})