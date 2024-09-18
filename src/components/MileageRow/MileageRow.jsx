import { formatDate } from '../../utils/formatDate';

export function MileageRow({date, distance, onEdit, onDelete}) {
  return (
    <tr>
      <td>{formatDate(date)}</td>
      <td>{distance}</td>
      <td className='actions'>
        <button className='edit' onClick={onEdit}>✏️</button>
        <button className='delete' onClick={onDelete}>❌</button>
      </td>
    </tr>
  );
}
