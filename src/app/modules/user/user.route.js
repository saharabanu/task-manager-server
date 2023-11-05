const express = require('express') ;
const UserControllers = require('./user.controller');


const router = express.Router();




router.post(
  "/register", UserControllers.createUser
);
router.post(
  "/login", UserControllers.loginUser
);
router.get(
  "/", UserControllers.getAllUser
);

 const UserRoutes = router;
 module.exports = UserRoutes;
