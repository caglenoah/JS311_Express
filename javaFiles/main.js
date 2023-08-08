// check
//console.log("loading main.js")

// brings in all the function we need from express module
const express = require('express');

// create an application object that uses express
let app = express();

// define a port we'll communicate through
let PORT = 5001;

// for testing, our domain name is http://localhost:5001

// for any request where the route is "/hello"
// send a string as the response

app.get('/hello', (req, res) => {
   res.send("Hi there from the hello route")
})

// write a GET request with a route that will let me send a message by a name
// route /hello/Annie <- this is request parameter

app.get('/hello/:name', (req, res) => {

   let value = req.params.name;
   let message = `Hello ${value}`;

   res.send(message)

})

// write a GET route definition that uses a query parameter

// request url contains /bye?name=Jill   --> "See you later Jill"
// request url contains /bye?name=Robert --> "See you later Robert"
// request url is just /bye              --> "See you later"

// HINT: you get the query parameter using: req.query.name

// app.get(route, callback)
// get a value for the query parameter
// if there is a value, display appropriate message
// if not, display another message

app.get("/bye", (req,res) => {
   // get value if there is one
   let value = req.query.name;
   
   if(value) {
      res.send(`See you later ${value}`)
   } else {
      res.send(`See you later`)
   }

})



app.listen(PORT, () => {console.log('Application is listening on port ', PORT)})