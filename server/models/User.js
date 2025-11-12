import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String },
    password: { type: String, required: true },
    avatar: { type: String },
    gender: { type: String, enum: ["male", "female", "bi", "other"] },
  },
  { timeStamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
