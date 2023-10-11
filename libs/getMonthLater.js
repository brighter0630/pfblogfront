import printDateMonth from "./printDateMonth";

export default function getMonthAgo(date) {
  const current = new Date(date);
  const monthAgo = new Date(
    new Date(current.getFullYear(), current.getMonth() + 1)
  );

  return printDateMonth(monthAgo);
}
