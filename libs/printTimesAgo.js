export function printTimesAgo(date) {
	const diff = new Date() - date;

	if(diff < 60 * 60 * 1000) `${diff/60/1000}분 전`;
	if(diff < 24 * 60 * 60 * 1000) `${diff/60/60/1000}시간 전`;

	const dateDate = new Date(date);
  const year = dateDate.getFullYear().toString();
  const month = ("0" + (dateDate.getMonth() + 1)).slice(-2);
  const day = ("0" + dateDate.getDate()).slice(-2);
  const hour = ("0" + dateDate.getHours()).slice(-2);
  const min = ("0" + dateDate.getMinutes()).slice(-2);

  return `${year}년 ${month}월 ${day}일`;

}
