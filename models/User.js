const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');


const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validEmail, 'Please enter a valid email address'],
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please enter a valid email address']
    },
    friends: {
      _id: []
    },

  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

module.exports = User;