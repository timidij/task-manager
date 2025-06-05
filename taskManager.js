import fs from "fs"
export const addTask = async (title, description)=>{
    
    try {
       const file = getAllTasks()
       //    console.log(file)
       let count = file.length +1 //file.length+1
        let date = new Date
        let task = {
       "id":count,
       "title": title,
       "description": description,
       "completed": false,
       "createdAt": date
    }
        file.push(task)
        
        saveTasksToFile(file)
        return task;
        
    } catch (error) {
        console.log(error)
    }
   


}




export const getAllTasks= ()=>{
    
    try {
        let file = loadTasksFromFile()
    
       return file

    } catch (err) {
        
    }
    
}
export const markTaskComplete = async (taskId) =>{
    const value  = await getAllTasks()
    // console.log(value)
    if(!taskId){
        return console.log("Task ID missing")
    }
    value.forEach((element, index)=>{
       
        if (element.id == taskId){
            // console.log("true")
            element.completed = true;
            console.log(`task ${taskId} has been marked complete`)
            
        }
        
        
    })
    saveTasksToFile(value)
    
}
export const deleteTask= (taskId)=>{
    
    let delTask = getAllTasks()
    try {
        // if (taskId >= delTask.length){
        //     return console.log("please the task ID does not exist, try a lower ID")
        // }
        

        delTask.forEach((element,index)=>{
        if(element.id == taskId){
            delTask.splice(index, 1)
            console.log("your task has been deleted")
        }
    })
    saveTasksToFile(delTask)
    } catch (error) {
        console.log("an Error has occured", error)
    }
    
}

export const saveTasksToFile =(tasks)=>{
    let strive = JSON.stringify(tasks)
        try {
            
            fs.writeFileSync("./tasks.json", strive)
        } catch (error) {
            
        }
        // return console.log("created")
    
}
export const loadTasksFromFile= ()=>{
    const fileContent = fs.readFileSync("./tasks.json", "utf-8")
        const collection = JSON.parse(fileContent)
        return collection
        
}
