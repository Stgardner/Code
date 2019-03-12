const express = require("express")
const app = express() 
const port = 7080
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const database = [
    {
        name: 'spaghetti',
        type: 'pasta',
        sauce: 'red',
        id: 9235974
}, {
        name: "fettuccine",
        type: "pasta",
        sauce: "alfredo",
        id: 9834578
}, {
        name: 'Lasagna',
        type: 'pasta',
        sauce: 'marinara',
        id: 9829
}
]



app.get('/food', (req, res) => {
    res.send({database})
})

app.listen(port, () => {
        console.log(`server is running ${port}`)
})     

app.post('/food', (req, res) => {
    console.log(req.body)
    database.push(req.body)
    res.send(database)
})

app.put('/food', (req, res) => {
    
})