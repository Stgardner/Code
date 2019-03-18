const express = require("express");
const todoRouter = express.Router();
const uuid = require('uuid')



const Todos = [
    {
   "name": "Do laundry",
   "description": "Grab the clothes, put them in the wash",
   "imageUrl": "https://www.rd.com/wp-content/uploads/2018/02/01_Lights_Laundry-Mistakes-You-Didn%E2%80%99t-Know-You-Were-Making_478483900_Evgeny-Atamanenko-760x506.jpg.",
   "completed": false,
   "_id": "23k4lh23h2"
    }]

todoRouter.route("/")
.get((req, res) => {
    res.send(Todos)
})

.post((req, res) =>{
    const newObj = req.body;
    newObj._id = uuid.v4();
    Todos.push(req.body);
    res.send(Todos)
});

todoRouter.route('/:id')
.put((req, res)=> {
    const updatedObj = req.body;
    const {id} = req.params;
    Todos.forEach(spot => {
        if(spot._id === id) { 
            spot = Object.assign(spot, updatedObj) 
        }
    })
    res.send(Todos)
})

.delete((req, res)=> {
    const {id} = req.params;
    const index = Todos.findIndex(spot => spot._id === id)
    Todos.splice(index, 1)
    res.send('Item successfully removed')
})

.get((req, res)=> {
    const {id} = req.params;
    const found = Todos.find(spot => spot._id === id);
    (found) ? res.send(found) : res.send('Not found')
})

module.exports = todoRouter;