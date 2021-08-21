// const dateFormat = require('../utils/dateFormat');

const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
      userName: {
        type: String,
        unique: false,
        required: true,
        trim: true
      },
      email: {
        type: String,
        unique: false,
        required: true,
        trim: true
      },
      _id: [],
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought'
        }
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ]
    },
    
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );
  
const User = model('User', UserSchema);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

module.exports = User;