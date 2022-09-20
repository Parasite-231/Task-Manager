const mongoose = require("mongoose");

const userTasksSchema = new mongoose.Schema({
  assignee: {
    type: String,
    required: true,
  },

  assign_to: {
    type: String,
    required: true,
  },

  task: {
    type: String,
    required: true,
  },

  additional: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userTasksModel = mongoose.model("userTasks", userTasksSchema);

module.exports = userTasksModel;
