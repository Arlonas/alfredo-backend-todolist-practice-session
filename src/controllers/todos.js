const { todosDB } = require("../database");
const { nanoid } = require("nanoid");

const todosControllers = {
  getAllTodos: (req, res) => {
    if (!todosDB.length) {
      res.status(404).json({
        message: "No todos found",
      });
      return;
    }
    res.status(200).json({
      message: "Get todosData",
      result: todosDB,
    });
  },
  createNewTodos: (req, res) => {
    const newtoDoList = req.body;

    if (!newtoDoList) {
      res.status(400).json({
        message: "todos  is required",
      });
      return;
    }

    newtoDoList.id = nanoid();

    todosDB.push(newtoDoList);

    res.status(201).json({
      message: "Created new todos",
      result: newtoDoList,
    });
  },
  editTodosById: (req, res) => {
    const todosId = req.params.id;
    const edittodos = req.body;

    const findIndex = todosDB.findIndex((val) => {
      return val.id == todosId;
    });

    if (findIndex == -1) {
      res.status(404).json({
        message: "todos not found",
      });
      return;
    }

    todosDB[findIndex] = {
      ...todosDB[findIndex],
      ...edittodos,
    };

    res.status(200).json({
      message: "Edited todos",
      result: todosDB[findIndex],
    });
  },
  deleteTodosById: (req, res) => {
    const todosId = req.params.id;

    const findIndex = todosDB.findIndex((val) => {
      return val.id == todosId;
    });
    todosDB.splice(findIndex, 1);

    res.status(200).json({
      message: "Deleted todos",
    });
  },
};

module.exports = todosControllers;
