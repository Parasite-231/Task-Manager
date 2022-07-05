const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const UserTasksModel = require("../../models/user models/user schema/userTasksSchema");

const userTasksRouter = express.Router();
userTasksRouter.use(express.json());

userTasksRouter.post("/addtask", async (req, res) => {
  const assignee = req.body.assignee;
  const assign_to = req.body.assign_to;
  const task = req.body.task;
  const additional = req.body.additional;
  const saveInfo = new UserTasksModel({
    assignee: assignee,
    assign_to: assign_to,
    task: task,
    additional: additional,
  });
  await saveInfo.save();

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
  const task_id = req.body.task_id;
  const assigneeToBeUpdated = req.body.assignee;
  // const assignedUserToBeUpdated = req.params.assign_to;
  // const taskToBeUpdated = req.params.task;
  // const additionalToBeUpdated = req.params.additional;

  try {
    await UserTasksModel.findById(task_id, (data, err) => {
      data.assignee = assigneeToBeUpdated;
      // data.assign_to = assignedUserToBeUpdated;
      // data.task = taskToBeUpdated;
      // data.additional = additionalToBeUpdated;
      data.save();
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = userTasksRouter;
