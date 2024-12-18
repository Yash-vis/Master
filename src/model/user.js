import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || model("User", userSchema, "users");

export const createUser = async (email, name) => {
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { error: "User with this email already exists." };
    }

    const newUser = new User({ email, name });
    await newUser.save();

    return { success: "User created successfully!" };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "An error occurred while creating the user." };
  }
};

export default User;
