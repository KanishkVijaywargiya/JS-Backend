import mongoose from "mongoose";

// creating a user schema
const userSchema = new mongoose.Schema(
  {
    // 2nd way
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
    // one way to define
    /*
  username: String,
  email: String,
  isActive: Boolean,
  */
  },
  { timestamps: true } // will generate 2: createdAt & updatedAt
);

// export model - wat model I need to make & on wat basis
export const User = mongoose.model("User", userSchema);

// name of this model in mongo DB will be - users

// when user data gets stored, I need to check when that user came & its data stored.
// so here comes the concept of timestamps - createdAt: & updatedAt:
