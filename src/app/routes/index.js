const express = require('express');
const TaskRoutes = require('../task/task.route');
const UserRoutes = require('../modules/user/user.route');


const router = express.Router();


const taskRoutes = [
  // ... routes
  {
    path: '/user',
    routes: UserRoutes,
  },
  {
    path: '/tasks',
    routes: TaskRoutes,
  },
  
];

taskRoutes.forEach(route => router.use(route.path, route.routes));
module.exports = router;
