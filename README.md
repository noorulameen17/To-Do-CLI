# To-Do-CLI
This is a command-line interface (CLI) application for managing a Todo list using Sequelize as the ORM for database interactions.

Features
Add Task: Add new tasks to your Todo list.
Show List: Display tasks categorized as Overdue, Due Today, and Due Later.
Mark as Complete: Mark tasks as completed.
Installation
Clone the Repository:
git clone <repository-url>
cd <repository-directory>
Copy
Insert

Install Dependencies: Ensure you have Node.js and npm installed, then run:
npm install
Copy
Insert

Set Up Database: Configure your database connection in the Sequelize configuration file.
Usage
Add a Task
To add a new task, use the following command:

node addTodo.js --title "Task Title" --dueDate "YYYY-MM-DD"
Copy
Insert

Show Todo List
To display the categorized Todo list, run:

node showList.js
Copy
Insert

Mark Task as Complete
To mark a task as complete, use the task ID:

node markComplete.js --id <task-id>
Copy
Insert

Code Structure
models/todo.js: Contains the Sequelize model for the Todo tasks, including methods for adding tasks, displaying the list, and marking tasks as complete.
Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

License
This project is licensed under the MIT License.
