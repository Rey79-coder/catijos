const dateFormat = require('../utils/dateFormat');

const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment's _id field
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String, max: 280,
        required: true,
        trim: true
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  


const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, max: 280,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
});

const Thought = model('Thought', ThoughtSchema);

// get total count of comments and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = Thought;