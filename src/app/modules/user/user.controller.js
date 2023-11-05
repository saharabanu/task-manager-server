const config = require('../../../config')
const  httpStatus = require("http-status") ;
const catchAsync = require('../../../shared/catchAsync');
const sendResponse = require("../../../shared/sendResponse");

const UserServices  = require('./user.service');

const createUser = catchAsync(async (req, res) => {
  const userData = req.body;
  // console.log(userData, 'from controller');

  const result = await UserServices.createUer(userData);

  const { refreshToken, ...others } = result;
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully!",
    data: others,
  });
});

const UserControllers = {
  createUser,
};
module.exports = UserControllers
