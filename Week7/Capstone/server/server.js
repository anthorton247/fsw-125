const express = require("express")
const app = express()
app.use(express.json())

app.use('/capstone', require("./Routes/capRouter"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("App is listening on port 9000")
})