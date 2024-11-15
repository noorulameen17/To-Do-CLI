'use strict';
const {Model,Op} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log( "My Todo list \n" );
      

      console.log("Overdue");
      const overdueItems = await Todo.overdue();
      overdueItems.forEach((item) => {
        console.log(item.displayableString());
      });
      console.log("\n");

      console.log("Due Today");
      const dueTodayItems = await Todo.dueToday();
      dueTodayItems.forEach((item) => {
        console.log(item.displayableString());
      });
      console.log("\n");

      console.log("Due Later");
      const dueLaterItems = await Todo.dueLater();
      dueLaterItems.forEach((item) => {
        console.log(item.displayableString());
      });
      console.log("\n");
    }

   static async overdue() {
  const today = new Date().toISOString().split('T')[0];
  return await Todo.findAll({
    where: {
      dueDate: {
        [Op.lt]: today
      }
    },
    order: [['dueDate', 'ASC']]
  });
}

static async dueToday() {
  const today = new Date().toISOString().split('T')[0];
  return await Todo.findAll({
    where: {
      dueDate: today
    },
    order: [['id', 'ASC']]
  });
}

static async dueLater() {
  const today = new Date().toISOString().split('T')[0];
  return await Todo.findAll({
    where: {
      dueDate: {
        [Op.gt]: today
      }
    },
    order: [['dueDate', 'ASC']]
  });
}

static async markAsComplete(id) {
  return await Todo.update(
    { completed: true },
    {
      where: {
        id: id
      }
    }
  );
}


    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
    }
  }
  Todo.init({
    title: DataTypes.STRING,
    dueDate: DataTypes.DATEONLY,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};