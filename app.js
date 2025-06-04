import express from "express"
import task from "./taskRoute.js"
import { addTask, getAllTasks, markTaskComplete, deleteTask } from "./taskManager.js";
const app = express()
app.use(express.json())





app.use("/api", task)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log("app is running on port", PORT)
   
})

import { createServer } from 'node:http';

const startingServer = () =>{
    
    const hostname = '127.0.0.1'; // Localhost
    const port = 3000; 

    // Create an HTTP server
    const server = createServer((req, res) => {
       
        res.statusCode = 200;
        
    });

    
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
        console.log('Press Ctrl+C to stop the server.');
    });
}
const displayAddedTask = (obj)=>{
    let very = `✓ Task added successfully!
    ID: ${obj.id}, Title:${obj.title}
    `
    console.log(very)
}
const listAllTask = (data) =>{
    data.forEach((element, index) => {
        let status = element.complete?"completed": "pending"
        let allTask = `[${element.id}] ${element.title}(${status})
        Description: ${element.description}
        Created: ${element.createdAt}
        `
        console.log(allTask)
    });
}
async function main  (){
    const args = process.argv.slice(2)
    const command = args[0];

    switch(command){
        case 'add':
            const title = args[1];
            const description = args[2]
            const ment = await addTask(title, description)
            displayAddedTask(ment)
            break;
        case "list":
           let me =  getAllTasks()
           listAllTask(me)
           break;
        case "complete":
            const id = args[1]
            markTaskComplete(id)
            break;
        case "delete":
            const index = args[1]
            deleteTask(index)
            break;
        case "server":
            startingServer()
            break;
        default:
            console.log("an invalid command entered")
    }
}



main()

