export default function DashboardNavSearchBar({ placeHolder, inputType }) {
  return (
    <input
      className="form-control form-control-dark w-100"
      type={inputType}
      placeholder={placeHolder}
      aria-label="Search"
    />
  );
}
