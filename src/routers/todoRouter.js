const router = require("express").Router();
const todoController = require("../controllers/todoController");

router.post("/todo", todoController.addTodo);

module.exports = router;
