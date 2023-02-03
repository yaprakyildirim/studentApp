import mongoose from 'mongoose';

const { Schema } = mongoose;

const photoSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type:String,
    required
  }
  },
  {
    timestamps: true  //mongoose updated ve created alan oluşturur
  }
  );

const User = mongoose.model('User', userSchema);

export default User;