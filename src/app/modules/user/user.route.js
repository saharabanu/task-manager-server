const express = require('express') ;
const UserControllers = require('./user.controller');


const router = express.Router();




router.post(
  "/register", UserControllers.createUser
);

 const UserRoutes = router;
 module.exports = UserRoutes;
