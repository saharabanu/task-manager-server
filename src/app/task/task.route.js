const express = require('express');
const TaskControllers = require('./task.controller');

const router = express.Router();

router.post(
  '/', TaskControllers.createTask
  
);
router.get(
  '/', TaskControllers.getAllTasks
  
);



 const TaskRoutes = router;
 module.exports = TaskRoutes;
