import DashboardSideBarAdminImage from "./DashboardSideBarAdminImage";
export default function DashboardSideBarAdminProfile({ adminName }) {
  return (
    <a
      href="#"
      className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
      id="dropdownUser1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      &nbsp;
      <DashboardSideBarAdminImage />
      <strong>{adminName}</strong>
    </a>
  );
}
