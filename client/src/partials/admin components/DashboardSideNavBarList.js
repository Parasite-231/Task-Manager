export default function DashboardSideNavBarList({ BarTabText, iconClassName }) {
  return (
    <li class="nav-item ">
      <a
        className="nav-link active"
        style={{ color: "white" }}
        href="adminDashboard.html"
      >
        <i className={iconClassName}></i>
        &nbsp;{BarTabText}
      </a>
    </li>
  );
}
