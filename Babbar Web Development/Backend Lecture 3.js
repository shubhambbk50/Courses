 //NOTE- for macbook u will need to do some setup, open cmd and write following command

 brew services start mongodb-community
 mongod --config /opt/homebrew/etc/mogod.conf






 // overall structure
 
 L2
    config
            database.js
    controllers
            createTodo.js
            deleteTodo.js
            getTodo.js
            updateTodo.js
    models
            todo.js
    node_modules
    routes
            todos.js
    .env
    index.js
    package-lock.json
    package.json







//package.json

 {
    "name": "l2",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start": "node index.js",
      "dev": "nodemon index.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "dotenv": "^16.4.5",
      "express": "^4.19.2",
      "mongoose": "^8.3.2",
      "nodemon": "^3.1.0"
    }
  }

  















  // .env
  PORT = 3000
DATABASE_URL = mongodb://127.0.0.1:27017/BabbarDataBase















// config/database.js
const mongoose = require('mongoose');

// The line require("dotenv").config(); is used in Node.js applications to load environment variables from a .env file into process.env.
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then( () => console.log("DB ka connection is successful"))
    .catch( (error) => {
        console.log("Issue in DB connection");
        console.error(error.message);
        process.exit(1);
    })
};

module.exports = dbConnect;













// models/todo.js

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:50,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
)
module.exports = mongoose.model("Todo", todoSchema);

















//index.js


// const express = require('express');
// const app = express();

// app.listen(3000, () => {
//     console.log("App is running successfully");
// });

const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//mmiddleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1", todoRoutes);

//start server
app.listen(PORT, () => {
    console.log('Server stated successfully at ${PORT}');
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/", (req,res) => {
    res.send('<h1> This is HOMEPAGE baby <h1>');
})












//routes/todos.js

const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require( "../controllers/deleteTodo");


//define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;

















//controllers/createTodo.js
const Todo = require("../models/todo");

exports.createTodo = async(req, res) => {
    try{
        // extract ittle and declaration from requesy body
        const {title, description} = req.body
        //create a new Todo Obj and insert in DB
        const response  = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Succcessfullyy'
            }
        )
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}












//controllers/deleteTodo.js

const Todo = require("../models/todo");

exports.deleteTodo = async(req, res) => {
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"Todo DELETEED",
        })
    }


    catch(err) {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
    }
}








//controllers/getTodo.js
 //import the model
 const Todo = require("../models/todo");

//define route handler

exports.getTodo = async(req, res) => {
    try{
        //fetch all todo items from database
        const todos = await Todo.find({});

        //response 
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo Data is fetched",
        });
    }
    catch(err) {
        console.error(err);
        console.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
    }
}



exports.getTodoById = async(req, res) => {
    try{
        // extract items 
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})    // in databse _id is being default stored

        //data forgiven id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found with given id",
            })
        }

        //data for given id FOUND
        res.status(200).json({
            success:true,
            data:todo,
            message: 'Todo ${id} data is succsessfully fetched',
        })
    }

    catch(err) {
        console.error(err);
        console.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        })
    }
}









//controllers/updateTodo

const Todo = require("../models/todo");

exports.updateTodo = async(req, res) => {
    try{
        const {id} = req.params;
        const {title, description} =  req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()},
        )

        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"Updated successfully",
        });
    }


    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'server error',
        })
    }
}













