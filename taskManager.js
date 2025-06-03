import fs from "fs"
export const addTask = async (title, description)=>{
    // console.log("imported")
    
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
        
    }
   


}




export const getAllTasks= ()=>{
    
    try {
        let file = loadTasksFromFile()
    //    let filejs = JSON.parse(file)
    //    console.log(file)
       return file

    } catch (err) {
        
    }
    
}
export const markTaskComplete = async (taskId) =>{
    const value  = await getAllTasks()
    console.log(value)
    value.forEach((element, index)=>{
       
        if (element.id == taskId){
            // console.log("true")
            element.completed = true
            
        }
        
        
    })
    saveTasksToFile(value)
    // console.log(value)
}
export const deleteTask= (taskId)=>{
 
    let delTask = getAllTasks()
    try {
        if (!taskId){
            return console.log("please enter a valid number")
        }
        if(taskId > delTask.length){
            console.log("The id entered does not exist")
        }

        delTask.forEach((element,index)=>{
        if(element.id == taskId){
            delTask.splice(index, 1)
            saveTasksToFile(delTask)
            console.log("task deleted")

        }
    })
    } catch (error) {
        console.log("an Error has occured", error)
    }
    
}

export const saveTasksToFile =(tasks)=>{
    let strive = JSON.stringify(tasks)
        
        fs.writeFileSync("./tasks.json", strive)
        // return console.log("created")
    
}
export const loadTasksFromFile= ()=>{
    const fileContent = fs.readFileSync("./tasks.json", "utf-8")
        const collection = JSON.parse(fileContent)
        if(collection.length== 0){
            console.log("No task has been added")
        }
        return collection
        
}

