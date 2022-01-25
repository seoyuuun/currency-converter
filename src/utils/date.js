export default function formatDate(date) {
  const time = new Date(date);
  let month = `${time.getMonth() + 1}`;
  let day = `${time.getDate()}`;
  const year = `${time.getFullYear()}`;
  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }
  return `${year}년 ${month}월 ${day}일`;
}
