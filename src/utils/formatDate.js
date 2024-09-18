// Функция для форматирования даты в таблице
export function formatDate(dateString) {
  if (!dateString) return ''; // Возвращаем пустую строку, если дата отсутствует или некорректна
  
  const [year, month, day] = dateString.split('-');
  
  // Проверяем, что все части даты корректны
  if (year && month && day) {
    return `${day}.${month}.${year}`;
  } else {
    return dateString; // Возвращаем исходную строку, если формат не распознан
  }
}
