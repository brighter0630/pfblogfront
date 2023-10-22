export default function getMonthsBetween(start, end) {
  const now = new Date();
  const startDate = "2023-09";
  const endDate = new Date(`${now.getFullYear()}-${now.getMonth() + 1}`);
  const endYear = new Date().getFullYear();
  let monthsBetween = [];

  for (let year = 2023; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      const cur = new Date(`${year}-${month}`);
      if (cur <= new Date(endDate) && cur >= new Date(startDate)) {
        const month2Digits = ("0" + month).slice(-2);
        monthsBetween.push(`${year}-${month2Digits}`);
      }
    }
  }
  return monthsBetween;
}
