const express = require("express");
const UserTasksModel = require("../../models/user models/user schema/userTasksSchema");
const adminTaskManagement = express.Router();
const mongoose = require("mongoose");

adminTaskManagement.use(express.json());

adminTaskManagement.get("/totaltasks", async (req, res) => {
  const totalTasks = await UserTasksModel.count();
  //   console.log(totalTasks);
  res.send({
    totalTasks: totalTasks,
  });
});
adminTaskManagement.get("/totalusers", async (req, res) => {
  const totalUsers = await UserTasksModel.count();
  //   console.log(totalTasks);
  res.send({
    totalUsers: totalUsers,
  });
});
adminTaskManagement.get("/nameoftheusers", async (req, res) => {
  UserTasksModel.find({}, { assign_to: 0, task: 0 }, (data, err) => {
    if (data) {
      res.send(data);
    } else {
      res.send(err);
    }
  });
});

module.exports = adminTaskManagement;
