const express = require("express")
const app = express()
const port = 6666


app.use(express.json())

app.use("/Todos", require("./todoRoutes"))

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})

