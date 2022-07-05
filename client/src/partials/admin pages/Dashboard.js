import totalUsers from "../../assets/images/profile.png";
import totalTaskIcon from "../../assets/images/tasklist.png";
import "../../styles/admin modules/global.css";
import AdminDashboardHeader from "../admin components/AdminDashboardHeader";
import DashboardHeader from "../admin components/DashboardHeader";
import DashboardHighlightedCards from "../admin components/DashboardHighlightedCards";
import DashboardSideBarAdminProfile from "../admin components/DashboardSideBarAdminProfile";
import DashboardSideBarAdminProfileOptions from "../admin components/DashboardSideBarAdminProfileOptions";
import DashboardSideNavBarList from "../admin components/DashboardSideNavBarList";
export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <DashboardSideNavBarList
                  BarTabText="Dashboard"
                  iconClassName="bx bxs-dashboard"
                />
                <DashboardSideNavBarList
                  BarTabText="Patient List"
                  iconClassName="bx bxs-group"
                />
                <DashboardSideNavBarList
                  BarTabText=" Psychiatrist List"
                  iconClassName="bx bxs-group"
                />
                <DashboardSideNavBarList
                  BarTabText="Appointment List"
                  iconClassName="bx bx-plus-medical"
                />
                <DashboardSideNavBarList
                  BarTabText="Compose Message"
                  iconClassName="bx bxs-edit-alt"
                />
                <DashboardSideNavBarList
                  BarTabText="Message History"
                  iconClassName="bx bxs-message"
                />
                <DashboardSideNavBarList
                  BarTabText="Chat Box"
                  iconClassName="bx bxs-message-rounded-dots"
                />
                <DashboardSideNavBarList
                  BarTabText="Complaint List"
                  iconClassName="bx bxs-notepad"
                />
                <DashboardSideNavBarList
                  BarTabText="Profile"
                  iconClassName="bx bxs-user"
                />
                <DashboardSideNavBarList
                  BarTabText="Help"
                  iconClassName="bx bxs-help-circle"
                />
              </ul>
              <hr />
              <div className="dropdown">
                <DashboardSideBarAdminProfile adminName="Yor" />
                <ul
                  className="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <DashboardSideBarAdminProfileOptions
                    link="#"
                    svgLink="http://www.w3.org/2000/svg"
                    svgPath="M19.74,14H21a1,1,0,0,0,1-1V11a1,1,0,0,0-1-1H19.74l0-.14a8.17,8.17,0,0,0-.82-1.92l.89-.89a1,1,0,0,0,0-1.41L18.36,4.22a1,1,0,0,0-1.41,0l-.89.89A8,8,0,0,0,14,4.25V3a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V4.25a8,8,0,0,0-2.06.86l-.89-.89a1,1,0,0,0-1.41,0L4.22,5.64a1,1,0,0,0,0,1.41l.89.89a8.17,8.17,0,0,0-.82,1.92l0,.14H3a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H4.26l0,.14a8.17,8.17,0,0,0,.82,1.92L4.22,17a1,1,0,0,0,0,1.41l1.42,1.42a1,1,0,0,0,1.41,0l.89-.89a8,8,0,0,0,2.06.86V21a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V19.75a8,8,0,0,0,2.06-.86l.89.89a1,1,0,0,0,1.41,0l1.42-1.42a1,1,0,0,0,0-1.41l-.89-.89a8.17,8.17,0,0,0,.82-1.92Z"
                    linkText="Settings"
                  />
                  <DashboardSideBarAdminProfileOptions
                    link="#"
                    svgLink="http://www.w3.org/2000/svg"
                    svgPath="M17.67,22a2,2,0,0,0,1.92-2.56A7.8,7.8,0,0,0,12,14a7.8,7.8,0,0,0-7.59,5.44A2,2,0,0,0,6.34,22Z"
                    linkText="Profile"
                  />
                </ul>
              </div>
            </div>
          </nav>
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <AdminDashboardHeader
                iconHeader="bx bxs-dashboard"
                headerText="Dashboard"
              />
              <div class="btn-toolbar mb-2 mb-md-0"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <DashboardHighlightedCards
                cardTitle="Total Users "
                cardIcon={totalTaskIcon}
                cardData=""
              />
              <DashboardHighlightedCards
                cardTitle="Total Tasks "
                cardIcon={totalUsers}
                cardData=""
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
