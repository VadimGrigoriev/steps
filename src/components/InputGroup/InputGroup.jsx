import './InputGroup.css'
import { useState } from 'react';

export function InputGroup({ onAddEntry }) {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()

    if (date && distance) {
      onAddEntry({date, distance: parseFloat(distance)})
      setDate('');
      setDistance('');
    } else {
      alert('Пожалуйста, заполните оба поля: дату и пройденное расстояние.');
    }
  }

  return (
    <form onSubmit={onSubmit} className='form'>
      <input 
        type='text' 
        name='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className='date' 
        placeholder='Дата (ДД.ММ.ГГ)' 
      />
      <input 
        type='float' 
        name='distance'
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        className='distance' 
        placeholder='Пройдено км' 
      />
      <button type='submit'>ОК</button>
    </form>
  );
}
