export function formatDate() {
  const time = new Date();
  let month = time.toLocaleString('en-US', { month: 'short' });
  let day = `${time.getDate()}`;
  const year = `${time.getFullYear()}`;
  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`;
}
