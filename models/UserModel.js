import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
 // _id: {
   // type: Number,
   // required: true
 // },
  name: {
    type: String,
    required: true,
    default: ""
  },
  email: {
    type: String,
    required: true,
    default: ""
  },
  password: {
    type: String,
    required: true,
    default: ""
  },
  links: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Link"
  }]
});

export default mongoose.model('users', UserSchema);