const express = require("express")
const app = express()
const port = 6667

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

app.use(express.json())

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})

app.get('/inventory', (req, res) => {
    let {type} = req.query;
    if(type) {
        const value = inventoryItems.filter(thing => thing.type === type)
        res.send(value)
    }
    res.send(inventoryItems)
})

