const authController = require("./auth");
const employeeControllers = require("./employees");
const postController = require("./posts");
const todosControllers = require("./todos")

module.exports = {
  employeeControllers,
  authController,
  postController,
  todosControllers
}