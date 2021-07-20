import mongoose from 'mongoose';

const User = new mongoose.Schema({
  username: {type: String, required: true, unique: true, min: 2, max: 30},
  name: {type: String, required: true, min: 1, max: 30},
  email: {type: String, required: true, unique: true},
  hash: {type: String, required: true},
  bio: {type: String, default: null, max: 160},
  profile_picture: {type: String, default: null},
  banner: {type: String, default: null},
  following: [{
    type: mongoose.Types.ObjectId, ref: "users"
  }],
  followers: [{
    type: mongoose.Types.ObjectId, ref: "users"
  }]
});

User.method("toClient", () => {
  
  // @ts-ignore
  let obj = this.toObject();

  obj.id = obj._id;
  delete obj._id; 
  
});

interface IUser extends mongoose.Document {
  username: string,
  name: string,
  email: string,
  hash: string,
  bio: string,
  profile_picture: string,
  banner: string,
  following: IUser[],
  followers: IUser[]
}

export default mongoose.model<IUser>("users", User);