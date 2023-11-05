const bcrypt = require('bcrypt');
const User  = require('./user.model');
const httpStatus = require('http-status');

const ApiError = require('../../../errors/ApiError');


const config = require('../../../config') ;
const jwtHelpers = require('../../../helpers/jwtHelpers');

// create or register user
const createUer = async (payload) => {
  const user = await User.create(payload);
  console.log(user, 'from service')

  const { id, email, role } = user;
  // console.log( user, 'From service')

  const accessToken = jwtHelpers.createToken(
    { email, role, id },
    config.jwt.secret,
    config.jwt.expires_in
  );

  const refreshToken = jwtHelpers.createToken(
    { email, role, id },
    config.jwt.refresh_secret,
    config.jwt.refresh_expires_in
  );

  return {
    accessToken,
    refreshToken,
  };
};

// login user

const loginUser = async (userData) => {
  const { email: loggedEmail, password } = userData;
  // console.log(userData,"service")

  const isUserExist = await User.findOne(
    { email: loggedEmail },
    { id: 1, password: 1, email: 1, role: 1 }
  );

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (isUserExist.password) {
    const isPasswordMatched = await bcrypt.compare(
      password,
      isUserExist.password
    );
    if (!isPasswordMatched) {
      throw new ApiError(httpStatus.UNAUTHORIZED, 'Password does not match');
    }
  }

  const { email, role, id } = isUserExist;

  const accessToken = jwtHelpers.createToken(
    { email, role, id },
    config.jwt.secret ,
    config.jwt.expires_in 
  );

  const refreshToken = jwtHelpers.createToken(
    { email, role, id },
    config.jwt.refresh_secret ,
    config.jwt.refresh_expires_in 
  );

  return {
    accessToken,
    refreshToken,
  };
};

// get all user 

const getAllUser = async () => {
  const result = await User.find();

  return result;
};


const UserServices = {
  createUer,
  loginUser,
  getAllUser
};
module.exports = UserServices;
