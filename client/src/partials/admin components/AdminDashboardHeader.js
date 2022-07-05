export default function AdminDashboardHeader({ iconHeader, headerText }) {
  return (
    <h1 className="h2">
      <i className={iconHeader}></i>
      &nbsp;{headerText}
    </h1>
  );
}
