import DeleteButtonImage from "../../assets/images/delete.png";
import UpdateButtonImage from "../../assets/images/editTask.png";
import "../../styles/global.css";
import classes from "../../styles/user modules/button.module.css";
import {
  default as UserErrorDataImage,
  default as UserTasksLoadingImage,
} from "../fetch data/user data/UserTasksLoadingImage";
import ContentsForTableColumn from "../user components/ContentsForTableColumn";
import HeaderForTableColumn from "../user components/HeaderForTableColumn";
import HeaderImage from "../user components/HeaderImage";
import TaskTableHeader from "../user components/TaskTableHeader";
import TextAreaInput from "../user components/TextAreaInput";
import TextInput from "../user components/TextInput";

// for fetching
import axios from "axios";
import { useEffect, useState } from "react";
export default function UserTasks() {
  const [loading, setLoading] = useState(false);
  const [listOfTasks, setListOfTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    axios
      .get("http://localhost:2330/user/tasks")
      .then((response) => {
        setListOfTasks(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const deleteTaskFunction = (_id) => {
    axios
      .delete(`http://localhost:2330/user/remove/${_id}`)
      .then((response) => {
        setListOfTasks(
          listOfTasks.filter((val) => {
            return val._id !== _id;
          })
        );
      });
  };

  // const updateTaskFunction = (taskId) => {
  //   const assigneeToBeUpdated = prompt("Enter assignee :");
  //   // const assignedUserToBeUpdated = prompt(
  //   //   "Enter whom you want to assign task :"
  //   // );
  //   // const taskToBeUpdated = prompt("Enter your task :");
  //   // const additionalToBeUpdated = prompt("Enter additional description:");

  //   axios
  //     .put("http://localhost:2330/user/updatetask", {
  //       task_id: taskId,
  //       assigneeToBeUpdated: assigneeToBeUpdated,
  //       // assignedUserToBeUpdated: assignedUserToBeUpdated,
  //       // taskToBeUpdated: taskToBeUpdated,
  //       // additionalToBeUpdated: additionalToBeUpdated,
  //     })
  //     .then((response) => {
  //       setListOfTasks(
  //         listOfTasks.map((val) => {
  //           return val._id === taskId
  //             ? {
  //                 _id: taskId,
  //                 assignee: val.assignee,
  //                 assign_to: assigneeToBeUpdated,
  //                 task: val.task,
  //                 additional: val.additional,
  //               }
  //             : val;
  //         })
  //       );
  //     });

  // };

  if (error) {
    <>
      <UserErrorDataImage />
    </>;
  }

  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="card" style={{ marginBottom: "20px", width: "50%" }}>
            <div className="card-header"></div>
            <div className="card-body">
              <h5 className="card-title" style={{ textAlign: "center" }}>
                Manage Task
              </h5>
              <div className="mb-3">
                <TextInput
                  labelText="Assignee"
                  placeHolder="Assignee"
                  textType="text"
                />
              </div>
              <div className="mb-3">
                <TextInput
                  labelText="Assign To"
                  placeHolder="Assign To"
                  textType="text"
                />
              </div>
              <div className="mb-3">
                <TextInput
                  labelText="Task"
                  placeHolder="Task"
                  textType="text"
                />
              </div>
              <div className="mb-3">
                <TextAreaInput
                  labelText="Additional Description"
                  inputSize="2"
                  placeHolder="Additional Description"
                />
              </div>
            </div>
          </div>

          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-4 text-white">
                <HeaderImage />

                <table className="table text-white mb-7">
                  <thead>
                    <tr>
                      <TaskTableHeader tableHeaderText="Assignee" />
                      <TaskTableHeader tableHeaderText="Assigned To" />
                      <TaskTableHeader tableHeaderText="Task" />
                      <TaskTableHeader tableHeaderText="Additional Note" />
                      <TaskTableHeader tableHeaderText="Remove Task" />
                      <TaskTableHeader tableHeaderText="Update Task" />
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <>
                        <UserTasksLoadingImage />
                      </>
                    ) : (
                      <>
                        {listOfTasks.map((records) => {
                          return (
                            <tr className="fw-normal">
                              <HeaderForTableColumn
                                indexText={records.assignee}
                              />

                              <ContentsForTableColumn
                                className="align-middle"
                                indexForColumnContent={records.assign_to}
                              />
                              <ContentsForTableColumn
                                className="align-middle"
                                indexForColumnContent={records.task}
                              />
                              <ContentsForTableColumn
                                className="align-middle"
                                indexForColumnContent={records.additional}
                              />
                              <td className="align-middle">
                                <button
                                  className={classes.button}
                                  onClick={() => {
                                    deleteTaskFunction(records._id);
                                  }}
                                >
                                  <img
                                    src={DeleteButtonImage}
                                    alt="updateButton"
                                  />
                                </button>
                              </td>
                              <td className="align-middle">
                                <button
                                  className={classes.button}
                                  onClick={() => {}}
                                >
                                  <img
                                    src={UpdateButtonImage}
                                    alt="updateButton"
                                  />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
