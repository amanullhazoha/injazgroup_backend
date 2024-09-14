const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    user_name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    email: {
      type: String,
      default: null,  // Set default to empty string
      unique: true,  // Ensure uniqueness
      sparse: true,
    },
    fb_id: {
      type: String,
      default: null,  // Set default to empty string
      unique: true,  // Ensure uniqueness
      sparse: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    is_agree: Boolean,
  },
  {
    timestamps: true,
    id: true,
  },
);

const User = model("User", userSchema);

module.exports = User;
