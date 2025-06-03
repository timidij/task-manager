import express from "express"
import { getAllTasks, addTask } from "./taskManager.js";

const router = express.Router();
const homepage = (req, res)=>{
    try {
        res.status(201).json({message: "a welcome to your Task manager"})
        
    } catch (error) {
        
    }
       
}
const getTask = (req, res)=>{
    let data = getAllTasks()
    try {
        
        res.status(201).json({ data})
    } catch (error) {
        
    }
       
}
const addTasks = (req, res)=>{
    let {title, description} = req.body
    try {
        addTask(title, description)
    
         res.status(201).json({message: "task has been added successfully"})
        
    } catch (error) {
        
    }
       
}
router.get("/", homepage) 
router.get("/tasks", getTask) 
router.post("/tasks", addTasks) 



export default router;







