const mongoose = require('mongoose');

const { Schema, model, Types } = require('mongoose');

// const Schema = mongoose.Schema;


const FriendSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment's _id field
    friendId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    friendBody: {
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



const userSchema = new Schema({
	username: 
	{ 
		type : String, 
    min: [4, 'Too short, min is 4 characters'], 
    max: [32, 'Too long, max is 32 characters']
	},
	email: 
	{ 
		type : String, 
    min: [4, 'Too short, min is 4 characters'], 
    max: [32, 'Too long, max is 32 characters'],
		unique : true, 
    lowercase : true, required : 'Email is Required', 
    match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
	},

  friends: [FriendSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false

});


// const User = model('User', userSchema);

// // get total count of comments and replies on retrieval
// userSchema.virtual('friendCount').get(function() {
//   return this.friends.length;
// });



const friendCount = mongoose.Schema({ _id: Number });

// get total count of friends and reactions on retrieval
friendCount.virtual('friendCount').get(function() {
  return this.friends.length;
  // .reduce((total, friends) => total + friends.length + 1, 0);
});


module.exports = mongoose.model('User', userSchema);
