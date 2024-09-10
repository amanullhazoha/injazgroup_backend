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
      default: "",  // Set default to empty string
    },
    fb_id: {
      type: String,
      default: "",  // Set default to empty string
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
