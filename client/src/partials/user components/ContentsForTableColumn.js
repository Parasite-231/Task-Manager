export default function ContentsForTableColumn({
  className,
  indexForColumnContent,
}) {
  return (
    <td className={className}>
      <span style={{ textAlign: "center" }}>{indexForColumnContent}</span>
    </td>
  );
}
