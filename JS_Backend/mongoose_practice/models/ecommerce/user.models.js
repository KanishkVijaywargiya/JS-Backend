import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: [6, `Must be at least 6 digit, got ${VALUE}`],
      max: 12,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
