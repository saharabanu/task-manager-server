const express = require("express");
const TaskControllers = require("./task.controller");
const validateRequest = require("../middlewares/validateRequest");
const TaskValidations = require("./task.validation");

const router = express.Router();

router.post("/",TaskControllers.createTask);
router.patch("/:id", TaskControllers.updateTask);
router.get("/:id", TaskControllers.getSingleTask);
router.delete("/:id", TaskControllers.deleteTask);

router.get("/", TaskControllers.getAllTasks);

const TaskRoutes = router;
module.exports = TaskRoutes;
