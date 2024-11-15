const { where } = require("sequelize");
const { connect } = require("./connectDB");
const Todo = require("./todomodel");

const createTodo = async () => {
  try {
    await connect();
    const todo = await Todo.addTask({
      title: "First Item",
      dueDate: new Date(),
      completed: false,
    });
    console.log(`Created Todo With ID : ${todo.id}`);
    return todo.id; // Return the created Todo ID
  } catch (error) {
    console.error(error);
  }
};

const countItems = async () => {
  try {
    const totalCount = await Todo.count();
    console.log(`Total number of items : ${totalCount}`);
  } catch (error) {
    console.error(error);
  }
};

const getAllTodos = async () => {
  try {
    const todos = await Todo.findAll({
      where: {
        completed: true,
      },
      order: [["id", "ASC"]],
    });

    const TodoList = todos.map((todo) => todo.displayableString()).join("\n");
    console.log(TodoList);
  } catch (error) {
    console.error(error);
  }
};

const getSingleTodo = async () => {
  try {
    const todo = await Todo.findOne({
      where: {
        completed: false,
      },
      order: [["id", "DESC"]],
    });
    console.log(todo.displayableString());
  } catch (error) {
    console.error(error);
  }
};

const updateItem = async (id) => { // Accept id as a parameter
  try {
     await Todo.update(
      { completed: false },
      {
        where: {
          id: id,
        },
      }
    );
    console.log(`Updated item with ID: ${id}`);
  } catch (error) {
    console.error(error);
  }
};

const deleteItem = async (id) => {
  try {
    const deletedRowCount = await Todo.destroy({
      where: {
        id: id,
      },
    });
    console.log(`Deleted ${deletedRowCount} rows`);
  } catch (error) {
    console.error(error);
  }
};

(async () =>{
    await getAllTodos();
    await countItems();
})();

//(async () => {
 // await createTodo(); // Capture the created Todo ID
//  await countItems();
    //await getAllTodos();
  //await getSingleTodo();
  //await updateItem(18); // Pass the ID to updateItem
  //await deleteItem(18); // Pass the ID to deleteItem
//})();