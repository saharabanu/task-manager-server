const express = require('express') ;
const UserControllers = require('./user.controller');


const router = express.Router();




router.post(
  "/register", UserControllers.createUser
);
router.post(
  "/login", UserControllers.loginUser
);

 const UserRoutes = router;
 module.exports = UserRoutes;
