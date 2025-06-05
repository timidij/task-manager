import express from "express"
import { addTask, getAllTasks, markTaskComplete, deleteTask } from "./taskManager.js";
const app = express()
app.use(express.json())

const PORT = 3000

const server = createServer((req, res) => {
    
    res.statusCode = 200;
    
});
import { createServer } from 'node:http';

 



const startExpressServer = () => {
    app.listen(PORT, () => {
        console.log(`Express Server running at http://localhost:${PORT}`);
        console.log('Access API routes at http://localhost:3000');
        console.log('Press Ctrl+C to stop the server.');
    });
};
app.get("", (req,res)=>{
    try {
        
        res.status(201).json("Welcome to Todo Page")
        
    } catch (error) {
        res.status(401).json({message: error})
    }
})

app.get("/tasks", async (req,res)=>{
    try {
        let data = await getAllTasks()
          
          res.status(401).json({ data})
        
    } catch (error) {
        
        res.status(401).json({message: error})
    }
})

app.post("/tasks", async (req,res)=>{
      let {title, description} = req.body
    try {
        addTask(title, description)
    
         res.status(201).json({message: "task has been added successfully"})
        
    } catch (error) {
                 res.status(401).json({message: `${error}`})

        
    }
    

})
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
                        startExpressServer()
                        break;
                        default:
                            console.log("an invalid command entered")
                        }
                    }
                    
 main()