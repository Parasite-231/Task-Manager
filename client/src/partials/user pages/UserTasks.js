import "../../styles/global.css";
import ButtonForDeleteTask from "../user components/ButtonForDeleteTask";
import ButtonForUpdateTasks from "../user components/ButtonForUpdateTasks";
import ContentsForTableColumn from "../user components/ContentsForTableColumn";
import HeaderForTableColumn from "../user components/HeaderForTableColumn";
import HeaderImage from "../user components/HeaderImage";
import TaskTableHeader from "../user components/TaskTableHeader";
export default function UserTasks() {
  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-4 text-white">
                <HeaderImage />
                <table className="table text-white mb-0">
                  <thead>
                    <tr>
                      <TaskTableHeader tableHeaderText="Team Member" />
                      <TaskTableHeader tableHeaderText="Task" />
                      <TaskTableHeader tableHeaderText="Priority" />
                      <TaskTableHeader tableHeaderText="Actions" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fw-normal">
                      <HeaderForTableColumn indexText="Alice Mayer" />

                      <ContentsForTableColumn
                        className="align-middle"
                        indexForColumnContent="Call Sam For payments"
                      />
                      <ContentsForTableColumn
                        className="align-middle"
                        indexForColumnContent="High priority"
                      />
                      <ButtonForDeleteTask />
                      <ButtonForUpdateTasks />
                    </tr>
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
