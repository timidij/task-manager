# task-manager
Overview
Create a simple Personal Task Manager application using Node.js. This task will test your understanding of core Node.js concepts including file system operations, modules, basic HTTP server creation, and JSON data handling.

Learning Objectives
By completing this task, you should demonstrate understanding of:

Node.js modules (built-in and custom)
File system operations (reading/writing files)
JSON data manipulation
Basic HTTP server creation
Command-line interaction
Error handling
Package.json basics
Part 1: Project Setup
Create a new directory called task-manager
1. Initialize a new Node.js project with npm init

Create the following file structure:


 task-manager/

├── package.json

├── app.js (main application file)

├── taskManager.js (custom module)

└── tasks.json (data storage file)

Part 2: Data Storage Module 
1. Create a taskManager.js module that exports the following functions:
Required Functions:
addTask(title, description) - Adds a new task
getAllTasks() - Returns all tasks
markTaskComplete(taskId) - Marks a task as completed
deleteTask(taskId) - Removes a task
saveTasksToFile() - Saves tasks to tasks.json
loadTasksFromFile() - Loads tasks from tasks.json
Task Object Structure:

{

  id: 1,

  title: "Learn Node.js",

  description: "Complete the beginner tutorial",

  completed: false,

  createdAt: "2025-05-27T10:30:00.000Z"

}

Part 3: Main Application
Create an app.js file that:

1. Imports required modules (both built-in and your custom module)

2. Implements a command-line interface that accepts these commands:

node app.js add "Task Title" "Task Description"
node app.js list
node app.js complete <taskId>
node app.js delete <taskId>
node app.js server (starts HTTP server)
3. Handles command-line arguments using process.argv

4. Implements proper error handling for file operations and invalid inputs

Part 4: HTTP Server
When running node app.js server, create a basic HTTP server that:

1. Listens on port 3000

2. Serves different endpoints:

GET / - Returns a welcome message (plain text)
GET /tasks - Returns all tasks as JSON
POST /tasks - Adds a new task (expects JSON body)

3. Returns appropriate HTTP status codes

Part 5: Error Handling & Validation 
Implement proper error handling for:
1. File read/write operations

2. Invalid command-line arguments

3. Missing task IDs

4. Malformed JSON data

5. Server errors

Sample Usage Examples
Command Line Usage:
# Add a new task

node app.js add "Buy groceries" "Milk, bread, eggs"

# List all tasks

node app.js list

# Mark task as complete

node app.js complete 1

# Delete a task

node app.js delete 2

# Start HTTP server

node app.js server

Expected Output Examples:
Adding a task:
✓ Task added successfully!

ID: 1, Title: "Buy groceries"

Listing tasks:
=== Your Tasks ===

[1] Buy groceries (Pending)

    Description: Milk, bread, eggs

    Created: 2025-05-27 10:30 AM


 

[2] Learn Node.js (Completed ✓)

    Description: Complete the beginner tutorial

    Created: 2025-05-27 09:15 AM