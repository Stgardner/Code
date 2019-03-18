const express = require("express")
const bountyRouter = express.Router()
const data = require("./bounties")
const uuid = require('uuid')

bountyRouter.route("/")
.get((req, res) => {
    res.send(data)
})
.post((req, res) => {
    const newObj = req.body;
    newObj._id = uuid.v4();
    data.push(req.body);
    res.send(data)
})

bountyRouter.route("/:id")
.delete((req, res) => {
    const {id} = req.params;
    const index = data.findIndex(spot => spot._id === id)
    data.splice(index, 1)
    res.send('Item Successfully Removed')
})
.put((req, res) => {
    const updatedObj = req.body;
    const {id} = req.params;
    data.forEach(spot => {
        if (spot._id === id) {
            spot = Object.assign(spot, updatedObj)
        }
    })
    res.send(data)
})
module.exports = bountyRouter