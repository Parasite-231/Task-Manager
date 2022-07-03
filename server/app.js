const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userTasksRouter = require("./router/user router/userTasksRouter");
const app = express();
app.use(express.json());
app.use(cors());

require("dotenv").config({ path: "./../dependency/.env" });
server_port = process.env.SERVER_PORT;
database_connection = process.env.DATABASE_CONNECTION_URL;

mongoose
  .connect(database_connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DATABASE CONNECTION SUCCESSFUL"))
  .catch((err) => console.log(err));

app.use("/user", userTasksRouter);

app.listen(server_port, () => {
  console.log(`SERVER PORT RUNNING AT ${server_port}`);
});
