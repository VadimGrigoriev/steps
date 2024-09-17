import './TableEntries.css'
import { MileageRow } from '../MileageRow/MileageRow';

export function TableEntries({ entries, onEdit, onDelete }) {

  return (
    <table className='entries'>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <MileageRow
            key={entry.id}
            date={entry.date}
            distance={entry.distance}
            onEdit={() => onEdit(entry.id)}
            onDelete={() => onDelete(entry.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
