CLASS 2 - main.js

Create a backend that is always running listening for requests

Request \*\*\* verb (GET, POST, PUT, DELETE)

URL or domain **_ route - what comes after the domain
query (sometimes) - the stuff after the ?
body (sometimes)
header (sometimes for extra options or params) we won't do this much
Response _** body \*\*\* response/status code

header (usually don't care about this)
When we're working on our computers, we are the server.

http://localhost:5001/ plus the route

truthy and falsey

false values empty string '' "" 0 null undefined NaN false

everything else is true

CLASS 3 - app.js

Review path (route) params: you can have only one path param i.e. GET /todos/:id and GET /todos/:completed are the same - the word is just a placeholder

query params: you can have more than one, but we'll just use one in our examples for now GET /todos?completed=false GET /todos?completed=true

one route that either has a query value passed or not use conditional (if statement) to find the right option

We're going to build our own todo app with our own api interface and our own data

todo object should have:

id : id of the todo item
description : what the todo is
completed : true or false
we're building a todo backend and here is what we want to support:

route that returns all the todos in our list GET /todos return an array of all todo objects

route that returns a single todo based on the id provided GET /todos/:id :id is the id of the todo to return if it exists otherwise return message "Id not found"

route that will delete a single todo based on the id provided DELETE /todos/:id :id is the id of the todo that was deleted return message with the item that was deleted

route that adds a single todo to the list POST /todos body should include an object that has a description. we'll make a function that generates a random id that's added when the new todo is created ex: body: {"description" : "feed the dog"}

route that updates an existing todo based on the id provided PUT /todos/:id ex: /todos/10, body= {"description": "buy groceries", "completed": true}

POST and PUT use the body

We're going to build a function to generate a random id

Math.random() // generates a number between 0 and 1 // it will NEVER return 1

0 0.001 0.465465546 0.56798465464654654 1 NEVER

0.56798465464654654 \* 100000 567984.65464654654 Math.floor(567984.65464654654) -> 567984

CLASS 4 - index.js

Organizing code, files, folders Machine doesn't care, easier to write less buggy code, easier to follow what's going on for humans (team)

Folder structure is a design choice. MVC architecture is most common model-view-controller

routes

where we define the routes our app supports
it's the "contract" for what our clients/users will interact with
controllers

the code that implements our contract
code that executes the logic that honors the contract
model

this is the code that handles the data layer
Access is the same: export the things you want to use
require where you want to use them in express, you can export only one thing, but you can export multiple things in one object.
