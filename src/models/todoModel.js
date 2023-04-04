const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "TaskTracker" }
);

const todo = mongoose.model("TaskTracker", todoSchema);

module.exports = todo;
