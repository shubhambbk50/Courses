// windows terminal
npm init -y

// open vs code
npm i express

  //also install 
  npm i nodemon 


//make index.js and write code

// to run code it is better to use nodemon, so edit package.json
{
    "name": "l2v1",
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
      "express": "^4.19.2",
      "nodemon": "^3.1.0"
    }
  }

  












// create index.js
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server is runniing on port 3000");
});








//create following folders
// config, controller, models, routes, .env file,




// CONTROLLERS - we use controller to write our business logic, what will happen for a particular api route
// MODEL - schema of database
// ROUTE - we will define path is matched with which controller
// CONFIG - connect database with the application
// .env - we define the PORT no we are going to use,and also define URL










// code in .env file
PORT = 3000
DATABASE_URL = mongodb://127.0.0.1:27017/BabbarDataBase
// 127.0.0.1 is same as localhost
 












// ---------------------------create database.js folder under config then

// This command adds Mongoose as a dependency in your package.json file and downloads the necessary files into the node_modules directory.
npm i  mongoose
// . This package allows you to load environment variables from a .env file into process.env in your Node.js application.
npm i dotenv

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














// --------------------------------------------------Model

// create todo.js to define the schema

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












//------------------------controllers

//create createTodo.js 

const Todo = require("../models/Todo");

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













//-------------------------------------------------------Routes

//create todos.js under routes folder

const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");

//define API routes
router.post("/createTodo", createTodo);

module.exports = router;
















//------------------------------------------index.js

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








//your package.json must be looking like this
{
    "name": "l2v1",
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

  



// type npm run dev in terminal to run your app