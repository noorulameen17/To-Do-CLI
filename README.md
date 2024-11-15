# 📋 To-Do-CLI

A simple Command-Line Interface (CLI) application for managing your Todo list using **Sequelize** for database interactions.

## ✨ Features
- **Add Task**: Add new tasks to your Todo list.
- **Show List**: View tasks as Overdue, Due Today, and Due Later.
- **Mark as Complete**: Mark tasks as completed.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/)

### Installation
1. **Clone the Repo**:
   ```bash
   git clone https://github.com/noorulameen17/todo-cli.git
   cd todo-cli
2. **Install Dependencies** :
    ```bash
    npm install
3.**Set Up Database** :
  - Edit config/config.json with your database settings.
  - Run migrations:
    ```bash
    npx sequelize-cli db:migrate
### 📚 Usage :

Add a New Task
```bash
node addTodo.js --title "Task Title" --dueDate "YYYY-MM-DD"
```

Show Todo List
```bash
node showList.js
```

Mark Task as Complete
```bash
node markComplete.js --id <task-id>
```
# 🗂️ Project Structure
```bash
├── models
│   └── todo.js
├── addTodo.js
├── showList.js
├── markComplete.js
├── config
│   └── config.json
└── README.md
```







