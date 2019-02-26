axios.get("https://api.vschool.io/stuart/todo").then(response => {
    renderTodos(response.data)
})

function renderTodos(todos){
    todos.forEach(function(todo){
        var inputParent = document.createElement("div")
        inputParent.id = todo._id
        var parent = document.createElement("div");
        parent.className = "todo";
        var text = document.createTextNode(todo.title);
        var image = document.createElement('img')
        image.className = "images";
        image.src = todo.imgUrl;
        parent.appendChild(text);
        parent.appendChild(image)
        var input = document.createElement("input");
        input.className = "input";
        input.type = "checkbox";
        input.addEventListener("click", handleChecked);
        parent.appendChild(inputParent);
        inputParent.appendChild(input);


        const deleteButton = document.createElement('button')
        deleteButton.className = 'delete'
        deleteButton.innerHTML = "Delete"
        parent.appendChild(deleteButton)
        deleteButton.addEventListener("click", function(e){
         axios.delete(`https://api.vschool.io/stuart/todo/${todo._id}`).then(function(){
                deleteButton.remove()
            })
        })
      
      deleteButton.addEventListener("click", function(e){
          e.target.parentNode.remove(e.target)
          renderTodos()
      })
        if(todo.completed){
            parent.classList.toggle("strikened");
            input.checked = true;
        }
        document.getElementById("todo-list").appendChild(parent);
    })
}
function handleChecked(e){
    console.log("here");
    e.target.parentNode.parentNode.classList.toggle("strikened");
    if(e.target.checked) {
        var newTodos = {
            'completed': true
        }

    } else {
        var newTodos = {
            'completed': false
        }
    }
    axios.put(`https://api.vschool.io/stuart/todo/${e.target.parentNode.id}`, newTodos).then(response=>{ 
        console.log(response.data)

    }).catch(err=>console.log(err))
}



  var parent = document.createElement('form')
  parent.className = "userform"
  parent.innerHTML = "New Todo"
  var title = document.createElement('input')
  title.setAttribute("type", "text")
  title.id = "title"
  title.placeholder = "title"
  parent.appendChild(title)
  var price = document.createElement("INPUT")
  price.setAttribute("type", "number")
  price.id = "price"
  price.placeholder = "price"
  parent.appendChild(price)
  var description = document.createElement("input")
  description.setAttribute("type", "text")
  description.id = "description"
  description.placeholder = "description"
  parent.appendChild(description)
  var imageurl = document.createElement("input")
  imageurl.setAttribute("type", "text")
  imageurl.id = "image"
  imageurl.placeholder = "image url"
  parent.appendChild(imageurl)
  var button = document.createElement('button')
  button.className = "submitbutton"
  button.innerHTML = "submit"
  button.setAttribute("type", "submit")
  parent.appendChild(button)
  button.addEventListener("click", postForm)
  document.getElementById("todo-entry").appendChild(parent);

 

 function postForm(e) {
    e.preventDefault()
     var newTodo = {
     }
     newTodo.title = document.getElementById("title").value
     newTodo.price = document.getElementById("price").value
     newTodo.description = document.getElementById("description").value
     newTodo.imgUrl = document.getElementById("image").value 
     console.log(newTodo)
     axios.post('https://api.vschool.io/stuart/todo', newTodo)
      .then(data=>console.log(data))
      .catch(err=>console.log(err))
    }
