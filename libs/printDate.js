export default function printDate(date) {
  const year = date.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const month = date.toLocaleDateString("en-US", {
    month: "2-digit",
  });
  const day = date.toLocaleDateString("en-US", {
    day: "2-digit",
  });

  return `${year}-${month}-${day}`;
}
