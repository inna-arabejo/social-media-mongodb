const { Schema, model } = require('mongoose');
const userSchema = require('./User');


const thoughtSchema = new Schema(
  {
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
    thoughtText: {
      type: String,
      required: true,
      
    },
    createdAt: {
      type: Date,
      timestamp: { type: Date, default: Date.now},
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      
    },

  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = User;