// Функция для преобразования строковой даты в формат, который можно корректно использовать с new Date()
export function parseDate(dateString) {
  const [day, month, year] = dateString.split('.');
  return new Date(`${year}-${month}-${day}`);
}
