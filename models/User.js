

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

  thoughts: [],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false

});


// const User = model('User', UserSchema);

// get total count of thoughts and replies on retrieval
// UserSchema.virtual('thoughtCount').get(function() {
//   return this.thoughts
//   .reduce((total, thought) => total + thought.reactions.length + 1, 0);
// });


module.exports = mongoose.model('User', userSchema);
