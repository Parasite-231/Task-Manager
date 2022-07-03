const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const UserTasksModel = require("../../models/user models/user schema/userTasksSchema");

const userTasksRouter = express.Router();
userTasksRouter.use(express.json());

userTasksRouter.post("/addtask", async (req, res) => {
  const task = new UserTasksModel({
    assignee: "sakib",
    assign_to: "sanu",
    task: "do",
    additional: "do",
  });
  await task.save();
  res.send("added");
  //insert Task
});

userTasksRouter.get("/tasks", async (req, res) => {
  UserTasksModel.find({}, (data, err) => {
    if (data) {
      res.send(data);
    } else {
      res.send(err);
    }
  });
});

userTasksRouter.delete("/remove/:id", async (req, res) => {
  const task_id = req.params.id;
  await UserTasksModel.findByIdAndDelete(task_id).exec();
  res.send("Deleted");
});

userTasksRouter.put("/updatetask", async (req, res) => {
  const task_id = req.params.id;
  const assigneeToBeUpdated = req.params.assignee;
  const assignedUserToBeUpdated = req.params.assign_to;
  const taskToBeUpdated = req.params.task;
  const additionalToBeUpdated = req.params.additional;

  try {
    await UserTasksModel.findById(task_id, (data, err) => {
      data.assignee = assigneeToBeUpdated;
      data.assign_to = assignedUserToBeUpdated;
      data.task = taskToBeUpdated;
      data.additional = additionalToBeUpdated;
      data.save();
    });
  } catch (err) {
    res.send(err);
  }

  res.send("Updated");
});

module.exports = userTasksRouter;
