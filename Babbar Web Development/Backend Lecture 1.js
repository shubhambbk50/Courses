// HTTP - GET  -  retrieve/fetch
//        PUT  -  update
//        POST -  submit
//        DELETE - remove


// Create a server -
// We use expressJS for to do it.
// expressJS is a framework used for creating server side application
// create a folder
// direct to required folder in windows command line or vs code terminal and write 
npm init -y 
//  this will create package.json
// open terminal of vsCode, direct to required folder and write 
npm i express
// this will create node_modules and package-lock.json
// create server.js file

// write 

// server instatiate
const express = require('express');
const app = express();

// used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');
// specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());

// activate the server on 3000 port
app.listen(3000, () => {
       console.log("Server Started at port no. 3000");
});

// Routes
app.get('/', (request, response) => {
       response.send("heelo jee, kaise ho saare");
});
// we can see it in our browser screen

app.post('/api/cars', (request, response) => {
       const {name, brand} = request.body;
       console.log(name);
       console.log(brand);
       response.send("Car submitted successfully");
})
// for it we need postman 
// open postman choose POST , choose body->raw->JSON and write data to be post to server side

// to run our server
// method one
node Server.js
// When you execute node server.js, it starts the Node.js application once.
//method two
nodemon Server.js
// When you execute nodemon server.js, it starts the Node.js application and monitors the file system for changes in the source code.
// If changes are detected in any of the files being monitored, nodemon automatically restarts the Node.js application.


//  MONGODB
// open source no-SQL DB, it stores data in form of document, key-value pair, graph, etc
// noSQL are useful for scalability and performance(there is no concept of row and column)
// Setup
// for macbook , do not do through official website , there is another way
// use will need mongoDb and mongoshell(command-line) to interact with mongoDB,
// but we can use mongoDB compass to ease the process, since it is GUI based not command line based
// CRUD operation(create, read, update, delete)


// open mongodb compass 
//connnect the database 
// create a database Cars and inside it create a folder mahindra
// click on add data , insert document
// mongoose is used to connect express.js(server) to mongodb(database)
// first install mongoose
npm i mongoose


const mongoose = require('mongoose');
const { Server } = require('http')

mongoose.connect('mongodb://localhost:27017/meraDatabase', {
       useNewUrlParser:true;
       useUnifiedTopology:true
})
.then(() => {
       console.log("Connection succesfful")
})
.catch(() => {
       console.log("Received an eroor")
}) 




// FuLL code

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("Server is runniing on port 3000");
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
//now bodyparser is not used, it is old technique

app.get('/temple', (request,response) => {
    response.send(" worl");
});

 
app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("requst send succussfully"); 
});



// Note- shortcut use cls in commmand, use tab to autowrite the full folder name, Ctrl+c to stop server


// how to save github codespace into repo permanently
git status
git add .
git commit -m "Add new feature"
git push origin main

// you can see the steps is you want to save data from VScode to github 