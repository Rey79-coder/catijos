
// // const dateFormat = require('../utils/dateFormat');
// const { Schema, model} = require('mongoose');

// const UserSchema = new Schema(
//     {
//       username: {
//         "_id": "objectId",
//         type: String,
//         lowercase: true,
//         trim: true,
//         index: true,
//         unique: true,
//         required: true
//       },
//       email: {
//         type: String,
//         lowercase: true,
//         trim: true,
//         index: true,
//         unique: true,
//         required: true
//       },
//       _id: [],
//       thoughts: [
//         {
//           type: Schema.Types.ObjectId,
//           ref: 'Thought'
//         }
//       ],
//       friends: [
//         {
//           type: Schema.Types.ObjectId,
//           ref: 'User'
//         }
//       ]
//     },
//   );
  
// const User = model('User', UserSchema);

// // get total count of comments and replies on retrieval
// UserSchema.virtual('friendCount').get(function() {
//   return this.friends.length;
// });

// module.exports = User;



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

});

module.exports = mongoose.model('User', userSchema);
