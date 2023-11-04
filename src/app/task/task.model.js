const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    viewDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["inCompleted", "completed"],
      default: "inCompleted",
    },
    image: {
      type: String,
    },
    priority: {
      type: String,
      enum: ["high", "low", "medium"],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

const Task = model("Task", taskSchema);

module.exports = Task;
