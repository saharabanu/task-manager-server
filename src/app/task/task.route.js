const express = require('express');
const TaskControllers = require('./task.controller');

const router = express.Router();

router.post(
  '/', TaskControllers.createTask
  
);



 const TaskRoutes = router;
 module.exports = TaskRoutes;
