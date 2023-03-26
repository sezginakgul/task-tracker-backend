const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "TaskTracker", timestamps: true }
);

const todo = mongoose.model("TaskTracker", todoSchema);

module.exports = todo;
