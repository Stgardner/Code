const express = require("express")
const app = express()
const port = 6767
const mongoose = require('mongoose')


app.use(express.json())

app.use("/bounties", require("./bountyRoutes"))

mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true}).then(()=> {
    console.log("Connected to MongoDB")
})

app.listen(port, () => {
    console.log(`Port is running on ${port}`)
})

