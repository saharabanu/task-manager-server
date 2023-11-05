const config = require('../../../config')
const  httpStatus = require("http-status") ;
const catchAsync = require('../../../shared/catchAsync');
const sendResponse = require("../../../shared/sendResponse");

const UserServices  = require('./user.service');

// create or register user

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

// login user

const loginUser = catchAsync(
  async (req, res) => {
    const userData = req.body;
    const result = await UserServices.loginUser(userData);
// console.log(result, userData)
    // set refreshToken into cookie
    const { refreshToken, ...others } = result;
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true,
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User logged in successfully!',
      data: others,
    });
  }
);

const UserControllers = {
  createUser,
  loginUser
};
module.exports = UserControllers
