const employeeRoutes = require("./employees");
const authRoutes = require("./auth");
const postRoutes = require("./posts")
const todosRoutes = require("./todos")

module.exports = {
  employeeRoutes,
  authRoutes,
  postRoutes,
  todosRoutes
}