
const User  = require('./user.model');

const config = require('../../../config') ;
const jwtHelpers = require('../../../helpers/jwtHelpers');


const createUer = async (payload) => {
  const user = await User.create(payload);

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

const UserServices = {
  createUer,
};
module.exports = UserServices;
