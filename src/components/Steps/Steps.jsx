import { InputGroup } from '../InputGroup/InputGroup';
import { TableEntries } from '../TableEntries/TableEntries';
import './Steps.css';
import { useCallback, useState } from 'react';

export function Steps() {
  const [entries, setEntries] = useState([
    {id:1, date: '16.09.2024', distance: 5.7},
    {id:2, date: '13.09.2024', distance: 10.3},
    {id:3, date: '11.09.2024', distance: 7.4},
  ]);

  const onAddEntry = useCallback((newEntry) => {
    setEntries(entries => {
      const entryIndex = entries.findIndex(entry => entry.date === newEntry.date);

      let updatedEntries;
      if (entryIndex !== -1) {
        // Если запись с такой датой уже существует, обновляем её
        updatedEntries = [...entries];
        updatedEntries[entryIndex] = {...updatedEntries[entryIndex], distance: updatedEntries[entryIndex].distance + newEntry.distance};
      } else {
        // Если записи с такой датой нет, добавляем новую
        updatedEntries = [...entries, {id: Date.now(), ...newEntry}];
      };
      // Сортируем список
      return updatedEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    });
  }, []);


  const onEdit = useCallback((id) => {
    
  },[]);

  const onDelete = useCallback((id) => {
    setEntries(entries => entries.filter(entry => entry.id !== id)
      .sort((a, b) => new Date(b.date) - new Date(a.date)))
  }, []);

  return (
    <div className='container'>
      <h1>Учёт тренировок</h1>
      <InputGroup onAddEntry={onAddEntry} />
      <TableEntries
        entries={entries}
        onEdit={onEdit}
        onDelete={onDelete} 
      />
    </div>
  );
}
