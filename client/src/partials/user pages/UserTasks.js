import "../../styles/global.css";
import {
  default as UserErrorDataImage,
  default as UserTasksLoadingImage,
} from "../fetch data/user data/UserTasksLoadingImage";
import ButtonForDeleteTask from "../user components/ButtonForDeleteTask";
import ButtonForUpdateTasks from "../user components/ButtonForUpdateTasks";
import ContentsForTableColumn from "../user components/ContentsForTableColumn";
import HeaderForTableColumn from "../user components/HeaderForTableColumn";
import HeaderImage from "../user components/HeaderImage";
import TaskTableHeader from "../user components/TaskTableHeader";

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

  if (error) {
    <>
      <UserErrorDataImage />
    </>;
  }

  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-4 text-white">
                <HeaderImage />

                {loading ? (
                  <>
                    <UserTasksLoadingImage />
                  </>
                ) : (
                  <>
                    {listOfTasks.map((records) => {
                      return (
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
                              <ButtonForDeleteTask />
                              <ButtonForUpdateTasks />
                            </tr>
                          </tbody>
                        </table>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
