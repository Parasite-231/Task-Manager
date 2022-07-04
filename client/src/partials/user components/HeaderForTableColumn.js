export default function HeaderForTableColumn({ indexText }) {
  return (
    <th>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
        alt="avatar 1"
        style={{ width: "45px", height: "auto" }}
      />
      <span className="ms-2">{indexText}</span>
    </th>
  );
}
