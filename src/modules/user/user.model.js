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
      unique: true,
      sparse: true,
      default: null,
    },
    fb_id: {
      type: String,
      unique: true,
      sparse: true,
      default: null,
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
