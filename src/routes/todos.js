const express = require("express");
const router = express.Router();

const { todosControllers } = require("../controllers");

router.get("/", todosControllers.getAllTodos)
router.post("/", todosControllers.createNewTodos)
router.patch("/:id", todosControllers.editTodosById)
router.delete("/:id", todosControllers.deleteTodosById)

module.exports = router;