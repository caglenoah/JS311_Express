//for the day four homeWork i will need to require the appropriate data file 
// for each controller file
//ex. let db = require('../data/vehicles')

let db = []; //won't use this for homework

const postTodo =(req,res) => {

    let newItem = {};
 
    newItem.description = req.body.description;
    newItem.completed = false;
    newItem.id = randomInt();
 
    // send to database array
    db.push(newItem);
 
    res.json(newItem);
 
 }
 
 const getAllTodos = (req, res) => {
 
    res.json(db);
 
 }
 
 const getById = (req,res) => {
    // get the id from the route
    let myId = req.params.id;
 
    // find that todo in our 'database' that matches the route id
    let matchingItem = db.find((item, index) => {
       return item.id == myId;
    })
 
    if(matchingItem) {
       res.json(matchingItem);
    } else {
       //res.send("ID not found");
       res.sendStatus(404);
    }
 
 }
 
 const deleteTodo = (req,res) => {
    //get the id from the route
    let myId = req.params.id;
 
    // find the matching id of the item in the db
    let matchingIndex = db.findIndex((item, index) => {
       return item.id == myId;
    })
 
    //if i find it, remove it and return deleted item. otherwise send a 404
    if(matchingIndex) {
       let deletedItem = db.splice(matchingIndex, 1);
       res.json(deletedItem);
    } else {
       res.sendStatus(404);
    }
 }
 
 const updateTodo = (req, res) => {
    let myId = req.params.id;
    let description = req.body.description; 
    let completed = req.body.completed == true;
 
    let matchingItem = db.find( (item, index) => {
       return item.id == myId;
    })
 
    if(matchingItem) {
       matchingItem.description = description;
       matchingItem.completed = completed;
       res.json(matchingItem);
    } else {
       res.send("Invalid Id")
    }
 
 }
 
 const randomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);
 
    return randomInt;
 }
 
 module.exports = {postTodo, getAllTodos, getById, deleteTodo, updateTodo}