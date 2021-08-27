const dateFormat = require('../utils/dateFormat');

const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent thought's _id field
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      trim: true
    },
    writtenBy: {
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

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: [4, 'Too short, min is 4 characters'], 
    max: [280, 'Too long, max is 32 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal)
  },
  username: {
    type: String,
    required: true
  },
  // use ReactionSchema to validate data for a reaction.
  reactions: [ReactionSchema],
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);


const Thought = model('Thought', ThoughtSchema);

// get total count of thoughts and reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

module.exports = Thought;