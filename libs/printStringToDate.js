export function printStringToDate(date) {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  return `${year}년 ${month}월 ${day}일`;
}
