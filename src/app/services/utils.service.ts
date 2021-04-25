export function convertToValidDate(date) {
  return date.substring(0, date.length - 11);
}

export function sortByAscDate(array) {
  return array.sort((a, b) => {
    const previousDate = convertToValidDate(a.date);
    const nextDate = convertToValidDate(b.date);
    return new Date(nextDate).getTime() - new Date(previousDate).getTime();
  });
}
