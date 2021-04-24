export function sortByAscDate(array) {
  return array.sort((a, b) => {
    const previousDate = a.date.substring(0, a.date.length - 11)
    const nextDate = b.date.substring(0, b.date.length - 11)
    return new Date(nextDate).getTime() - new Date(previousDate).getTime();
  });
}
