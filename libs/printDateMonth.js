export default function printDate(date) {
  const year = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
  });
  const month = new Date(date).toLocaleDateString("en-US", {
    month: "2-digit",
  });

  return `${year}-${month}`;
}
