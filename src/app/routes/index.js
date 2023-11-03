const express = require('express');
const TaskRoutes = require('../task/task.route');


const router = express.Router();


const taskRoutes = [
  // ... routes
  {
    path: '/tasks',
    routes: TaskRoutes,
  },
  
];

taskRoutes.forEach(route => router.use(route.path, route.routes));
module.exports = router;
