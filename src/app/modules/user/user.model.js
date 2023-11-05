const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const config = require('../../../config') ;



const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin','super_admin'],
    },
    profileImgUrl: {
      type: String,
    },
    phonenumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.pre('save', async function (next) {
  if (this.password) {
    this.password = await bcrypt.hash(
      this.password,
      Number(config.bycrypt_salt_rounds)
    );
  }

  next();
});

 const User = model('User', userSchema);
 module.exports = User;
