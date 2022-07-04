export default function ContentsForTableColumn({
  className,
  indexForColumnContent,
}) {
  return (
    <td className={className}>
      <span>{indexForColumnContent}</span>
    </td>
  );
}
